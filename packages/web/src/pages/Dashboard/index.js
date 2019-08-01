import React, { useState, useMemo, useEffect } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import {
  format,
  subDays,
  addDays,
  setSeconds,
  setMinutes,
  setHours,
  isBefore,
  isEqual,
  parseISO,
} from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';

import api from '~/services/api';

import { Container, Time } from './styles';

// TODO: Set range on backend.
const range = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

export default function Dashboard() {
  const [schedule, setSchedule] = useState([]);
  const [date, setDate] = useState(new Date());

  const dateFormatted = useMemo(() => format(date, 'MMMM do'), [date]);

  useEffect(() => {
    async function loadSchedule() {
      const response = await api.get('schedule', { params: { date } });

      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      const data = range.map(hour => {
        const checkHour = setSeconds(setMinutes(setHours(date, hour), 0), 0);
        const compareHour = utcToZonedTime(checkHour, timezone);

        return {
          time: `${hour}:00`,
          past: isBefore(compareHour, new Date()),
          appointment: response.data.find(a =>
            isEqual(parseISO(a.date), compareHour)
          ),
        };
      });

      setSchedule(data);
    }

    loadSchedule();
  }, [date]);

  function handlePrevDay() {
    setDate(subDays(date, 1));
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  return (
    <Container>
      <header>
        <button type="button" onClick={handlePrevDay}>
          <MdChevronLeft size={36} color="#fff" />
        </button>
        <strong>{dateFormatted}</strong>
        <button type="button" onClick={handleNextDay}>
          <MdChevronRight size={36} color="#fff" />
        </button>
      </header>
      <ul>
        {schedule.map(time => (
          <Time key={time.time} past={time.past} available={!time.appointment}>
            <strong>{time.time}</strong>
            <span>
              {time.appointment ? time.appointment.user.name : 'Available'}
            </span>
          </Time>
        ))}
      </ul>
    </Container>
  );
}
