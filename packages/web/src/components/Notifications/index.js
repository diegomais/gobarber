import React, { useState } from 'react';
import { MdNotifications } from 'react-icons/md';

import {
  Container,
  Badge,
  NotificationList,
  Scroll,
  Notification,
} from './styles';

export default function Notifications() {
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <Badge onClick={handleToggleVisible} hasUnread>
        <MdNotifications color="#7159c1" size={20} />
      </Badge>

      <NotificationList visible={visible}>
        <Scroll>
          <Notification unread>
            <p>You have a new appointment for tomorrow.</p>
            <time>2 days ago</time>
            <button type="button">Mark as read</button>
          </Notification>
          <Notification>
            <p>You have a new appointment for tomorrow.</p>
            <time>2 days ago</time>
            <button type="button">Mark as read</button>
          </Notification>
          <Notification>
            <p>You have a new appointment for tomorrow.</p>
            <time>2 days ago</time>
            <button type="button">Mark as read</button>
          </Notification>
          <Notification>
            <p>You have a new appointment for tomorrow.</p>
            <time>2 days ago</time>
            <button type="button">Mark as read</button>
          </Notification>
          <Notification>
            <p>You have a new appointment for tomorrow.</p>
            <time>2 days ago</time>
            <button type="button">Mark as read</button>
          </Notification>
          <Notification>
            <p>You have a new appointment for tomorrow.</p>
            <time>2 days ago</time>
            <button type="button">Mark as read</button>
          </Notification>
        </Scroll>
      </NotificationList>
    </Container>
  );
}
