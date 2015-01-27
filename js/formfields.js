
/*Copyright (c) 2009 Stefano J. Attardi, http://attardi.org/ Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including
 without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be
 included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. */

(function($) {

    function toggleLabel() {
        var input = $(this);
        setTimeout(function() {
            var def = input.attr('title');
            if (!input.val() || (input.val() == def)) {
                input.prev('label').css('visibility', '');
                if (def) {
                    var dummy = $('<label></label>').text(def).css('visibility','hidden').appendTo('body');
                    input.prev('label').css('margin-left', 3 + 'px');
                    dummy.remove();
                }
            } else {
                input.prev('label').css('visibility', 'hidden');
            }
        }, 0);
    };

    function resetField() {
        var def = $(this).attr('title');
        if (!$(this).val() || ($(this).val() == def)) {
            $(this).val(def);
            $(this).prev('label').css('visibility', '');
        }
    };

    $('#signup-form input, #signup-form textarea').live('cut', toggleLabel);

    $('#signup-form input, #signup-form textarea').live('keydown', toggleLabel);
    $('#signup-form input, #signup-form textarea').live('paste', toggleLabel);
    $('select').live('change', toggleLabel);

    $('#signup-form input, #signup-form textarea').live('focusin', function() {
        $(this).prev('label').css('color', '#999');
    });
    $('#signup-form input, #signup-form textarea').live('focusout', function() {
        $(this).prev('label').css('color', '#555');
    });

    // set things up as soon as the DOM is ready
    $(function() {
        $('#signup-form input, #signup-form textarea').each(function() { toggleLabel.call(this); });
    });

    // do it again to detect Chrome autofill
    $(window).load(function() {
        setTimeout(function() {
            $('#signup-form input, #signup-form textarea').each(function() { toggleLabel.call(this); });
        }, 0);
    });

})(jQuery);
