import React from 'react';
import { Avatar, Typography, ListItemText, ListItemAvatar, ListItemButton } from '@mui/material';

import { fToNow } from '@/lib/FormatTime';
import Iconify from '@/components/iconify';

import type { Notification } from './NotificationsPopover';

interface NotificationItemProps {
  notification: Notification;
}

export default function NotificationItem({ notification }: NotificationItemProps) {
  const { avatar, title } = renderContent(notification);

  return (
    <ListItemButton
      sx={{
        py: 1.5,
        px: 2.5,
        mt: '1px',
        ...(notification.isUnRead && {
          bgcolor: 'action.selected',
        }),
      }}
    >
      <ListItemAvatar>
        <Avatar sx={{ bgcolor: 'background.neutral' }}>{avatar}</Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={title}
        secondary={
          <Typography
            variant="caption"
            sx={{
              mt: 0.5,
              display: 'flex',
              alignItems: 'center',
              color: 'text.disabled',
            }}
          >
            <Iconify icon="eva:clock-outline" sx={{ mr: 0.5, width: 16, height: 16 }} />
            {fToNow(notification.createdAt)}
          </Typography>
        }
      />
    </ListItemButton>
  );
}

interface RenderContentResult {
  avatar: React.ReactNode;
  title: React.ReactNode;
}

function renderContent(notification: Notification): RenderContentResult {
  const title = (
    <Typography variant="subtitle2">
      {notification.title}
      <Typography component="span" variant="body2" sx={{ color: 'text.secondary' }}>
        &nbsp; {notification.description}
      </Typography>
    </Typography>
  );

  if (notification.type === 'order_placed') {
    return {
      avatar: (
        <img
          alt={notification.title}
          src="/src/assets/icons/notifications/notification_package.svg"
        />
      ),
      title,
    };
  }
  if (notification.type === 'order_shipped') {
    return {
      avatar: (
        <img
          alt={notification.title}
          src="/src/assets/icons/notifications/notification_shipping.svg"
        />
      ),
      title,
    };
  }
  if (notification.type === 'mail') {
    return {
      avatar: (
        <img alt={notification.title} src="/src/assets/icons/notifications/notification_mail.svg" />
      ),
      title,
    };
  }
  if (notification.type === 'chat_message') {
    return {
      avatar: (
        <img alt={notification.title} src="/src/assets/icons/notifications/notification_chat.svg" />
      ),
      title,
    };
  }
  return {
    avatar: notification.avatar ? <img alt={notification.title} src={notification.avatar} /> : null,
    title,
  };
}
