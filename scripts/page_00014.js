//=========================================
// File name: page_NNNNN.js
//-----------------------------------------
// Project : QuizFaber 4.1.9
// Licence : GNU General Public License v3.0
// Author  : Luca Galli
// Email   : info@quizfaber.com
//-----------------------------------------
// Script for NNNNN-th question
//=========================================

    var listLeft13;
    var listLeftHtml13;
    var listRight13;
    var orderLeft13;
    var orderRight13;



$(document).ready(function ()
{
	const questionIndex = 13;
	const questionTime = 0;

	PageLoad(questionIndex, questionTime);

	    listLeft13 = new CreateListLeft13();
    listLeftHtml13 = new CreateListLeftHtml13();
    listRight13 = new CreateListRight13();
    orderLeft13 = new ShuffleMatchingOrder(listLeft13.length);
    orderRight13 = new ShuffleMatchingOrder(listRight13.length);
    var hideLeftDropdown = false;
    var textHtml = CreateMatchingLists(listLeft13, listLeftHtml13, listRight13, orderLeft13, orderRight13, "idDD13", textSelect, hideLeftDropdown);
    $('#matching13').html(textHtml);
    var maxLeftSize = GetMaxSizeLeftColumn(listLeft13);
    var maxRightSize = GetMaxSizeRightColumn(listRight13);
    var leftWidth = maxLeftSize * 10;
    var rightWidth = maxRightSize * 10;
    ManageMatchingEvents(listLeft13, "idDD13", leftWidth, rightWidth, options.matchingLockLeftCol);
    SetDefaultLeftColumn(listLeft13, "idDD13", hideLeftDropdown);


});

$(window).on("beforeunload", function ()
{
	PageUnload();
	window.scrollTo(0, 0);
});

$(window).on("scroll", function ()
{
	PageOnScroll();
});


/* Code generated function */
function InitQuestion14()
{
    const type = QMAKE_MATCHING;
    const questionIndex = 13;
    var weight = DecodeNumber('08mxqHAA8fk=', 816, 0, 99999);
    var numOfAnswers = 3;
    var i, j;
    var answer;
    var choice, valuation;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('08mxqHAA8fk=', 816, -1000, 1000),DecodeDecimal('aGfLCtV2bB0=', 816, -1000, 1000),DecodeDecimal('aGfLCtV2bB0=', 816, -1000, 1000));
    question.num = 14;
    question.answers.length = 0;
    question.shortTextQuestion = "Associazione (Entità / Attributo / Relazione)";
    question.noChoice = false;
    for (i = 0; i < orderLeft13.length; i++)
    {
        choice = new Array(2);;
        choice[0] = GetSelectedItemLeft("idDD13", i);
        choice[1] = GetSelextedItemRight("idDD13", i);
        if (choice[1]==='') question.noChoice=true;
        valuation = new Array();
        for (j = 0; j < listLeft13.length; j++)
        {
            if (listLeft13[j] === choice[0])
            {
                valuation.push(listRight13[j]);
            }
        }
        answer = new Answer(choice, valuation, 1, 0, '');
        question.answers.push(answer);
    }
    return question;

}


/* Code generated function */
function ClearQuestion14()
{
    ClearMatching("idDD13", 0);
    ClearMatching("idDD13", 1);
    ClearMatching("idDD13", 2);

}


/* Code generated function */
function CreateListLeft13()
{
    this.length = 3;
    this[0] = unescape(DecodeString("wM790lAxMVA="));
    this[1] = unescape(DecodeString("RQZilrJfhRO6TGQN"));
    this[2] = unescape(DecodeString("bhgpn3tMlj1dxz2G"));

}

/* Code generated function */
function CreateListRight13()
{
    this.length = 3;
    this[0] = unescape(DecodeString("ous8OBo6DDbaoSeNDwV7SorKzskjw8ug"));
    this[1] = unescape(DecodeString("qy397I3HnLU0aUFbOmZSN+mj+BsqVMG1"));
    this[2] = unescape(DecodeString("D+dZjHXl0xQrXdJGlB6XTryyM3hHrv+q"));

}

/* Code generated function */
function CreateListLeftHtml13()
{
    this.length = 3;

}





