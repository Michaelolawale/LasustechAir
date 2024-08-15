//  function ()
//  {
//   var picker = e.select('.flatpickr');
//     if (e.isVariableDefined(picker)) {
//       var element = e.selectAll('.flatpickr');
//       element.forEach(function (item) {
//         var mode = item.getAttribute('data-mode') == 'multiple' ? 'multiple' : item.getAttribute('data-mode') == 'range' ? 'range' : 'single';
//         var enableTime = item.getAttribute('data-enableTime') == 'true' ? true : false;
//         var noCalendar = item.getAttribute('data-noCalendar') == 'true' ? true : false;
//         var inline = item.getAttribute('data-inline') == 'true' ? true : false;
//         var dateFormat = item.getAttribute('data-date-format') ? item.getAttribute('data-date-format') : item.getAttribute('data-enableTime') == 'true' ? "h:i K" : "d M";

//         flatpickr(item, {
//           mode: mode,
//           enableTime: enableTime,
//           noCalendar: noCalendar,
//           inline: inline,
//           animate: "false",
//           position: "top",
//           dateFormat: dateFormat, //Check supported characters here: https://flatpickr.js.org/formatting/
//           disableMobile: "true"
//         });

//       });
//     }
//   }