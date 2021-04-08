$( document ).ready(function() {
  $('.popup-start-button').on('click', function(e) {
    e.preventDefault();
    $('.elephango-static').remove();
    $('.elephango-animation').removeClass('d-none');
    StartLessonPopupModule.init();
   
  });
});


var StartLessonPopupModule = (function () {

  $popupHtml = `
    <div class="start-lesson-popup">
      <div class="popup-body d-flex align-items-center">
        <div>
          <h3 class="popup-title text-center mb-3">Ready to start the lesson or just browsing?</h3>
          <div class="w-70 mx-auto text-center popup-text">
            <p>Get started with the lesson by clicking Start Lesson below. If you’re just browsing and not planning to start just yet, click Just Browsing.</p>
            
            <div class="w-80 text-center mx-auto mt-4">
              <a href="##" class="btn btn-warning mr-2 mb-3">Start Lesson</a>
              <div class="popup-delimitor d-flex align-items-center mx-auto">
                <div class="delimitor-line"></div>
                <div class="px-3">or</div>
                <div class="delimitor-line"></div>
              </div>
              <a href="##" class="btn btn-light mr-2 mb-3 mt-3">Just Browsing</a>
              <a href="##" class="link-footer">Don’t show this message again. I will click START when I am ready.</a>
            </div>
            
          </div>
          
        </div>
      </div>
    </div>`;

  function assignPopup() {
    $.fancybox.open({
      src : $popupHtml,
      type : 'html',
      html : {
        css : {
            width : '600px'
        }
      }
    });
  }
  
  function countInput() {
    $counter =  $('.note-instructions-counter');
    $noteInstructionsInput = $('#note-instructions')
    let text_max = 160;
    let text_length = $noteInstructionsInput.val().length;
    $counter .html(text_length + '/160');
    $noteInstructionsInput.keyup(function() {
      text_length = $noteInstructionsInput.val().length;
      $counter .html(text_length + '/160');
    });
  }

  function showDueDate() {
    $(document).on('click', '.due-date-btn', function() {
      $(this).remove();
      $('#due-date').removeClass('d-none');
    });
  }

  function init() {
    assignPopup();
    countInput();
    showDueDate();
  }

  return {
    init: init
  };

}());