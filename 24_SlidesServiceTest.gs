/**
 * スライド(SlidesService)
 */
function slidesServiceTest() {
  // スライドIDを設定してください。
  const slidesId = ''
  const presentation = SlidesApp.openById(slidesId);
  const slides = presentation.getSlides();
  for(slide of slides){
    Logger.log(slide)
  }
  const slide = presentation.appendSlide();
  // スプレッドシートIDを設定してください。
  const spreadsheetId = '';
  const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
  const charts = spreadsheet.getActiveSheet().getCharts()

  const sourceChart = charts[0]
  const size = { width: 600, height: 400 };
    const position = { left: 50, top: 5 };
    slide.insertSheetsChartAsImage(
      sourceChart,
      position.left,
      position.top,
      size.width,
      size.height);
  slides[slides.length -1].remove()
}
