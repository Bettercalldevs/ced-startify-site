import { useState } from 'react';
import { Bell, X, MessageCircle, Download, ChevronDown } from 'lucide-react';

// WhatsApp Icon SVG Component
const WhatsAppIcon = () => (
  <svg
    viewBox="0 0 32 32"
    fill="currentColor"
    className="w-6 h-6"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16 .6C7.6.6.6 7.6.6 16c0 2.8.7 5.5 2.1 7.9L.1 31.4l7.7-2c2.3 1.2 4.8 1.9 7.4 1.9 8.4 0 15.4-7 15.4-15.4S24.4.6 16 .6zm0 28c-2.4 0-4.8-.6-6.9-1.8l-.5-.3-4.6 1.2 1.2-4.5-.3-.5C3.6 21 3 18.6 3 16 3 8.8 8.8 3 16 3s13 5.8 13 13-5.8 13-13 13zm7.3-9.7c-.4-.2-2.5-1.2-2.9-1.3-.4-.2-.8-.2-1.1.2s-1.3 1.3-1.6 1.6c-.3.3-.6.3-1 .1-.3-.2-1.2-.4-2.3-1.2-1-.8-1.7-1.8-1.9-2.1s0-.7.3-.9c.3-.3.7-.8 1-.9.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6-.1-.2-1.1-2.7-1.5-3.7-.4-.9-.8-.8-1.1-.8h-.9c-.2 0-.6.1-.8.4s-1 1-1 2.5 1.1 2.9 1.2 3.1c.2.2 2.2 3.3 5.2 4.6.7.3 1.3.5 1.8.6.7.2 1.3.1 1.8.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2s-.4-.2-.8-.4z" />
  </svg>
);


// Notification Type Interface
interface Notification {
  id: number;
  name: string;
  action: string;
  post?: string;
  group?: string;
  time: string;
  unread: boolean;
  message?: string;
  expanded?: boolean;
  fullDetails?: string;
  downloadLink?: string;
}

// Sample Data
const notificationsData: Notification[] = [
  {
    id: 1,
    name: "Important Update!",
    action: "",
    post: "Startup Cafe registration",
    time: "01/06/2025",
    unread: true,
    fullDetails: "The Startup Cafe registration deadline has been extended to July 31, 2025. Don't miss this opportunity to register!",
  },
  {
    id: 2,
    name: "Important Update!",
    action: "",
    post: "Email Confirmation Update & WhatsApp Group Invitation",
    time: "01/04/2025",
    unread: true,
    fullDetails: `From: Austartify Team <no-reply@austartify.com>
To: Dear Participants
Subject: Email Confirmation Update & WhatsApp Group Invitation
Date: 01/04/2025
------------------------
Dear Participants,
We have received your responses, and email confirmation messages are being sent out. Some of you have already received them, while others will receive them by the end of this week.
If you have joined our WhatsApp group and filled out the form, rest assured that your confirmation is on the way.
For those who have only filled out the form but haven't joined the WhatsApp group yet, please join using the link we will send shortly and complete the form by Friday to receive your confirmation message along with your Team ID.
------------------------
Best Regards,
Austartify Team
🌐 Website: www.austartify.com`
  },
];

// Notification Popup Menu
function NotificationMenu({ onClose }: { onClose: () => void }) {
  const [notifications, setNotifications] = useState<Notification[]>(notificationsData);
  const [selectedNotification, setSelectedNotification] = useState<Notification | null>(null);

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, unread: false })));
  };

  const toggleNotificationDetails = (notification: Notification) => {
    if (selectedNotification?.id === notification.id) {
      setSelectedNotification(null);
    } else {
      setSelectedNotification(notification);
      setNotifications(prev =>
        prev.map(n =>
          n.id === notification.id ? { ...n, unread: false } : n
        )
      );
    }
  };

  const formatNotificationDetails = (details: string) => {
    return details.split('\n').map((line, index) => (
      <div key={index} className="whitespace-pre-wrap">
        {line}
      </div>
    ));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />

      <div className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-2xl shadow-2xl z-60 flex flex-col">
        <div className="flex justify-between items-center p-6 border-b">
          <h4 className="text-2xl font-bold text-black flex items-center">
            <MessageCircle className="mr-3 w-7 h-7 text-blue-600" />
            Notifications
            <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm ml-3">
              {notifications.filter(n => n.unread).length}
            </span>
          </h4>
          <div className="flex items-center space-x-4">
            <button onClick={markAllAsRead} className="text-gray-600 hover:text-black transition">
              Mark all as read
            </button>
            <button onClick={onClose} className="text-gray-600 hover:text-black">
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 overflow-y-auto">
          {notifications.map(notification => (
            <div
              key={notification.id}
              className={`p-4 rounded-lg cursor-pointer transition 
                ${notification.unread ? "bg-blue-50" : "bg-gray-50"}
                hover:shadow-md`}
              onClick={() => toggleNotificationDetails(notification)}
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-base font-semibold text-black">
                    {notification.name} {notification.action}
                    {notification.unread && (
                      <span className="inline-block w-2 h-2 bg-red-500 rounded-full ml-2"></span>
                    )}
                  </p>
                  {notification.post && (
                    <p className="text-blue-600 text-sm">{notification.post}</p>
                  )}
                  <p className="text-gray-500 text-xs mt-1">{notification.time}</p>
                </div>
                <ChevronDown className="text-gray-500 w-5 h-5" />
              </div>
            </div>
          ))}
        </div>

        {selectedNotification && (
          <div className="absolute inset-0 bg-white rounded-2xl overflow-hidden flex flex-col">
            <div className="flex justify-between items-center p-6 border-b">
              <h4 className="text-2xl font-bold text-black">Notification Details</h4>
              <button
                onClick={() => setSelectedNotification(null)}
                className="text-gray-600 hover:text-black"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto flex-grow">
              <div className="mb-6">
                <p className="text-xl font-semibold text-black mb-2">
                  {selectedNotification.name} {selectedNotification.action}
                </p>
                {selectedNotification.post && (
                  <p className="text-blue-600 text-base mb-2">
                    Post: {selectedNotification.post}
                  </p>
                )}
                <p className="text-gray-500 mb-4">{selectedNotification.time}</p>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg whitespace-pre-line font-mono text-sm">
                {formatNotificationDetails(selectedNotification.fullDetails || '')}
              </div>

              {selectedNotification.downloadLink && (
                <button
                  onClick={() => window.open(selectedNotification.downloadLink!, '_blank')}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition flex items-center justify-center mt-4"
                >
                  <Download className="mr-3 w-5 h-5" />
                  Download Full Details
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Combined WhatsApp and Notification Button
export default function NotificationAndWhatsAppButton() {
  const [isNotificationOpen, setIsNotificationOpen] = useState<boolean>(false);
  const unreadCount = notificationsData.filter(n => n.unread).length;

  const toggleNotifications = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+919363300704', '_blank');
  };

  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col gap-4">
      <div
        className="bg-green-500 text-white p-3 rounded-full shadow-lg cursor-pointer hover:bg-green-600 transition-all"
        onClick={handleWhatsAppClick}
      >
        <WhatsAppIcon />
      </div>

      <div
        className="relative bg-blue-600 text-white p-3 rounded-full shadow-lg cursor-pointer hover:bg-blue-700 transition-all group"
        onClick={toggleNotifications}
      >
        <Bell className="w-6 h-6" />
        {unreadCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-1 group-hover:animate-pulse">
            {unreadCount}
          </span>
        )}
      </div>

      {isNotificationOpen && (
        <NotificationMenu onClose={() => setIsNotificationOpen(false)} />
      )}
    </div>
  );
}
