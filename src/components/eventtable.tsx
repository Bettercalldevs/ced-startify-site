import { Calendar, Clock } from "@phosphor-icons/react";
import { AlertTriangle } from "lucide-react";

interface Event {
  category: string;
  name: string;
  dates: string;
  mode?: string;
  time?: string;
  mandatory?: string;
}

const COMMON_ATTENDANCE_REQUIREMENTS = `🎓 Important Attendance Requirements:

• All team members must attend every day
• Sessions run daily during the assigned dates
• Be online 5 minutes before start time (6:30 PM)
• Ensure you have a stable internet connection
• Check your assigned dates in the member list and verify your startup name in the previously shared name list on WhatsApp.
• Mark your calendar for all dates

Please confirm your attendance by responding to the cohort coordinator.
For any scheduling conflicts, inform organizers immediately.`;

const events: Event[] = [
  { 
    category: "Bootcamps(Round 1)", 
    name: "Cohort 1 (Feb 25 - Mar 1)", 
    dates: "Feb 25 - Mar 1, 2025", 
    mode: "Online", 
    time: "6:30 PM - 8:30 PM"
  },
  { 
    category: "Bootcamps(Round 1)", 
    name: "Cohort 2 (Mar 7 - Mar 11, 2025)", 
    dates: "Mar 7 - Mar 11, 2025", 
    mode: "Online", 
    time: "6:30 PM - 8:30 PM"
  },
  { 
    category: "Bootcamps(Round 1)", 
    name: "Cohort 3,4 (Mar 19 - Mar 24, 2025)", 
    dates: "Mar 19 - Mar 24, 2025", 
    mode: "Online", 
    time: "6:30 PM - 8:30 PM"
  },
  { 
    category: "Bootcamps(Round 1)", 
    name: "Cohort 5 (Mar 24 - Mar 28, 2025)", 
    dates: "Mar 24 - Mar 28, 2025", 
    mode: "Online", 
    time: "6:30 PM - 8:30 PM"
  },
  { 
    category: "Bootcamps(Round 1)", 
    name: "Cohort 6 (Mar 25 - Mar 29, 2025)", 
    dates: "Mar 25 - Mar 29, 2025", 
    mode: "Online", 
    time: "6:30 PM - 8:30 PM"
  },
  { 
    category: "Bootcamps(Round 1)", 
    name: "Cohort 7,8,9,10,11 (Apr 1 - May 18, 2025)", 
    dates: "Mar 25 - Mar 29, 2025", 
    mode: "Online", 
    time: "6:30 PM - 8:30 PM"
  },
 
  { 
    category: "Bootcamps(Round 1)", 
    name: "Cohort 12 (May 20 - May 24, 2025)", 
    dates: "To Be Announced", 
    mode: "Online", 
    time: "6:30 PM - 8:30 PM"
  },  
     
   { 
    category: "Jury Sessions(Round-2)", 
    name: "Startup Cafe, Pitch-X", 
    dates: "Jury Sessions Starting from April 28, 2025",
    mode: "Online",
    time: "As Per Schedule",
    mandatory: `📢 Important Instructions for All Teams 📢

✅ Presentation Requirements:
• Present using the Wadhwani-generated PPT template only
• Screen sharing is mandatory during presentation
• Time limit: 15 minutes - plan your content accordingly
• Join Google Meet 10 minutes before your scheduled slot
• Keep backup internet connection ready

📌 Selection Process:
• Teams will be called randomly based on availability
• Every team gets an equal chance to present
• Selection Categories:
  - Direct Finals Entry
  - Pre-Finals Qualification
  - Not Qualified (with feedback for improvement)

💡 Pro Tips:
• Be prepared to present any time when called
• Test your audio and video before the session
• Keep your presentation concise and impactful
• Have all team members present during the pitch

All the best for your presentation!
– Team CED ❤`
  },
  { category: "Events", name: "Startup Mughavari", dates: "To Be Announced"},
  { category: "Events", name: "Startup Atlas", dates: "To Be Announced" },
  { category: "Events", name: "Intern Hunt", dates: "To Be Announced" },
  { category: "Events", name: "Founder Find", dates: "To Be Announced" },
  { 
    category: "Pre-Finals", 
    name: "Startup Cafe, GurusPitch, Pitch-X", 
    dates: "To Be Announced",
    
  },
  { 
    category: "Finals", 
    name: "All the Event's", 
    dates: "OCT 9 & 10",
    mandatory: "📢 Venue: CODISSIA Trade Fair Complex, Coimbatore 
@Tamilnadu Global Startup Summit 2025" 
  }
];
export default function EventSchedule() {
  return (
    <div className="mx-auto max-w-7xl p-2 sm:p-4">
      <div className="mb-6 sm:mb-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
          Event Schedule
        </h2>
        <p className="mt-2 text-base sm:text-lg leading-8 text-gray-600">
          Stay updated with our upcoming events and bootcamps
        </p>
      </div>

      {/* Add Common Requirements Section */}
      <div className="mb-6 rounded-lg bg-red-50 p-4">
        <div className="flex gap-2">
          <AlertTriangle size={20} className="mt-0.5 flex-shrink-0 text-red-600" />
          <div className="text-sm text-gray-900 whitespace-pre-wrap">
            {COMMON_ATTENDANCE_REQUIREMENTS}
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow">
        {/* Mobile View */}
        <div className="block md:hidden">
          {events.map((event, index) => (
            <div key={index} className="border-b border-gray-200 p-4">
              <div className="flex items-center gap-2 mb-2">
                <Calendar size={20} weight="bold" className="text-purple-600" />
                <span className="font-medium text-gray-900">{event.category}</span>
              </div>
              <div className="space-y-2">
                <div className="font-semibold text-gray-900">{event.name}</div>
                <div className="flex items-center gap-2">
                  <Clock size={20} weight="bold" className="text-green-600" />
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
                        weight="bold" 
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
                        weight="bold" 
                        className="text-green-600" 
                      />
                      <span className="text-gray-900">{event.dates}</span>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-4">
                    <span className="inline-flex rounded-full bg-purple-100 px-2 py-1 text-xs font-medium text-purple-700">
                      {event.mode}
                    </span>
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
