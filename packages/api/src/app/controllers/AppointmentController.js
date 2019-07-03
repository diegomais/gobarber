import * as Yup from 'yup';
import { format, isBefore, parseISO, startOfHour } from 'date-fns';

import User from '../models/User';
import Appointment from '../models/Appointment';
import File from '../models/File';
import Notification from '../schemas/Notification';

class AppointmentController {
  async index(req, res) {
    const { page = 1 } = req.query;
    const appointmentsPerPage = 10;
    const appointments = await Appointment.findAll({
      where: { user_id: req.userId, canceled_at: null },
      order: ['date'],
      attributes: ['id', 'date'],
      limit: appointmentsPerPage,
      offset: (page - 1) * appointmentsPerPage,
      include: [
        {
          model: User,
          as: 'provider',
          attributes: ['id', 'name'],
          include: {
            model: File,
            as: 'avatar',
            attributes: ['id', 'path', 'url'],
          },
        },
      ],
    });

    return res.json(appointments);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      date: Yup.date().required(),
      provider_id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Invalid parameters.' });
    }

    const { date, provider_id } = req.body;

    // Check if provider_id belongs to a provider
    const checkIsProvider = await User.findOne({
      where: { id: provider_id, provider: true },
    });

    if (!checkIsProvider) {
      return res.status(400).json({
        error: 'Provider must be a provider. Please, check and try again.',
      });
    }

    // Check for past date
    const hourStart = startOfHour(parseISO(date));

    if (isBefore(hourStart, new Date())) {
      return res.status(400).json({
        error: 'Date must not be in the past. Please, check and try again.',
      });
    }

    // Check provider and date is available
    const checkNotAvailable = await Appointment.findOne({
      where: { provider_id, canceled_at: null, date: hourStart },
    });

    if (checkNotAvailable) {
      return res
        .status(400)
        .json({ error: 'Sorry, this provider is not available at this time.' });
    }

    const appointment = await Appointment.create({
      user_id: req.userId,
      provider_id,
      date,
    });

    // Create notification to provider
    const user = await User.findByPk(req.userId);
    const formattedDate = format(hourStart, "dd.MM.yy' at 'HH:mm");
    await Notification.create({
      content: `New appointment of ${user.name} on ${formattedDate}`,
      user: provider_id,
    });

    return res.json(appointment);
  }
}

export default new AppointmentController();
