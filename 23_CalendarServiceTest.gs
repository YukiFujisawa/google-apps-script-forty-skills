/**
 * カレンダー(CalendarService)
 */
function calendarServiceTest() {
  // カレンダーIDを設定してください。
  const calendarId = ''
  const calendar = CalendarApp.getCalendarById(calendarId);
  CalendarApp.getCalendarById().getEvents()
  Logger.log('The calendar is named "%s".', calendar.getName());
  const startTime = new Date();
  const endTime = new Date(startTime.getTime() + (60 * 60 * 1000))
  // Logger.log(startTime);
  // Logger.log(endTime);
  // calendar.createEvent('タイトル', startTime, endTime);
  const calendarEvents = calendar.getEvents(startTime, endTime);
  Logger.log(calendarEvents);
  for (const event of calendarEvents) {
    Logger.log(event.getStartTime());
    Logger.log(event.getTitle());
    event.addGuest('developer.for.udemy@gmail.com');
    event.deleteEvent();
  }
}
