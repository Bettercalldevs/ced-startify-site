import { Calendar, Clock } from "lucide-react";
import { AlertTriangle } from "lucide-react";

interface Event {
  category: string;
  name: string;
  dates: string;
  mode?: string;
  time?: string;
  mandatory?: string;
}

const events: Event[] = [
 
 
  
  { 
    category: "Startup Summit 2025", 
    name: "Tamil Nadu Global Startup Summit 2025", 
    dates: "OCT 9 & 10, 2025",
    mode: "In-Person",
    time: "Full Day Event",
    mandatory: "📢 Venue: CODISSIA Trade Fair Complex, Coimbatore."
  }
];

export default function EventSchedule() {
  return (
    <div className="mx-auto max-w-7xl p-2 sm:p-4">
      <div className="mb-6 sm:mb-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
          Event Info
        </h2>
        <p className="mt-2 text-base sm:text-lg leading-8 text-gray-600">
          Our upcoming events
        </p>
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow">
        {/* Mobile View */}
        <div className="block md:hidden">
          {events.map((event, index) => (
            <div key={index} className="border-b border-gray-200 p-4">
              <div className="flex items-center gap-2 mb-2">
                <Calendar size={20} className="text-purple-600" />
                <span className="font-medium text-gray-900">{event.category}</span>
              </div>
              <div className="space-y-2">
                <div className="font-semibold text-gray-900">{event.name}</div>
                <div className="flex items-center gap-2">
                  <Clock size={20} className="text-green-600" />
                  <span className="text-sm text-gray-900">{event.dates}</span>
                </div>
                {event.mode && (
                  <div>
                    <span className="inline-flex rounded-full bg-purple-100 px-2 py-1 text-xs font-medium text-purple-700">
                      {event.mode}
                    </span>
                  </div>
                )}
                {event.time && (
                  <div className="text-sm text-gray-900">{event.time}</div>
                )}
                {event.mandatory && (
                  <div className="mt-3 rounded-lg bg-red-50 p-3">
                    <div className="flex gap-2">
                      <AlertTriangle size={20} className="mt-0.5 flex-shrink-0 text-red-600" />
                      <div className="text-sm text-gray-900 whitespace-pre-wrap">
                        {event.mandatory}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View */}
        <div className="hidden md:block overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gradient-to-r from-purple-600 to-purple-800">
                <th className="px-4 py-3.5 text-left text-sm font-semibold text-white">
                  Category
                </th>
                <th className="px-4 py-3.5 text-left text-sm font-semibold text-white">
                  Name
                </th>
                <th className="px-4 py-3.5 text-left text-sm font-semibold text-white">
                  Dates
                </th>
                <th className="px-4 py-3.5 text-left text-sm font-semibold text-white">
                  Mode
                </th>
                <th className="px-4 py-3.5 text-left text-sm font-semibold text-white">
                  Time
                </th>
                <th className="px-4 py-3.5 text-left text-sm font-semibold text-white">
                  Important Info
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {events.map((event, index) => (
                <tr key={index} className="group transition-colors hover:bg-gray-50">
                  <td className="whitespace-nowrap px-4 py-4">
                    <div className="flex items-center gap-2">
                      <Calendar 
                        size={20} 
                        className="text-purple-600" 
                      />
                      <span className="font-medium text-gray-900">
                        {event.category}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="font-semibold text-gray-900">
                      {event.name}
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-4">
                    <div className="flex items-center gap-2">
                      <Clock 
                        size={20} 
                        className="text-green-600" 
                      />
                      <span className="text-gray-900">{event.dates}</span>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-4">
                    {event.mode && (
                      <span className="inline-flex rounded-full bg-purple-100 px-2 py-1 text-xs font-medium text-purple-700">
                        {event.mode}
                      </span>
                    )}
                  </td>
                  <td className="whitespace-nowrap px-4 py-4">
                    <span className="text-gray-900">{event.time}</span>
                  </td>
                  <td className="px-4 py-4">
                    {event.mandatory && (
                      <div className="relative max-h-32 overflow-y-auto rounded-lg bg-red-50 p-3">
                        <div className="flex gap-2">
                          <AlertTriangle 
                            size={20} 
                            className="mt-0.5 flex-shrink-0 text-red-600" 
                          />
                          <div className="text-sm text-gray-900 whitespace-pre-wrap">
                            {event.mandatory}
                          </div>
                        </div>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
