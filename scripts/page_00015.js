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

    var listLeft14;
    var listLeftHtml14;
    var listRight14;
    var orderLeft14;
    var orderRight14;



$(document).ready(function ()
{
	const questionIndex = 14;
	const questionTime = 0;

	PageLoad(questionIndex, questionTime);

	    listLeft14 = new CreateListLeft14();
    listLeftHtml14 = new CreateListLeftHtml14();
    listRight14 = new CreateListRight14();
    orderLeft14 = new ShuffleMatchingOrder(listLeft14.length);
    orderRight14 = new ShuffleMatchingOrder(listRight14.length);
    var hideLeftDropdown = false;
    var textHtml = CreateMatchingLists(listLeft14, listLeftHtml14, listRight14, orderLeft14, orderRight14, "idDD14", textSelect, hideLeftDropdown);
    $('#matching14').html(textHtml);
    var maxLeftSize = GetMaxSizeLeftColumn(listLeft14);
    var maxRightSize = GetMaxSizeRightColumn(listRight14);
    var leftWidth = maxLeftSize * 10;
    var rightWidth = maxRightSize * 10;
    ManageMatchingEvents(listLeft14, "idDD14", leftWidth, rightWidth, options.matchingLockLeftCol);
    SetDefaultLeftColumn(listLeft14, "idDD14", hideLeftDropdown);


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
function InitQuestion15()
{
    const type = QMAKE_MATCHING;
    const questionIndex = 14;
    var weight = DecodeNumber('klQ6rMU83/w=', 826, 0, 99999);
    var numOfAnswers = 3;
    var i, j;
    var answer;
    var choice, valuation;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('klQ6rMU83/w=', 826, -1000, 1000),DecodeDecimal('ahOnilZzoxw=', 826, -1000, 1000),DecodeDecimal('ahOnilZzoxw=', 826, -1000, 1000));
    question.num = 15;
    question.answers.length = 0;
    question.shortTextQuestion = "Associazione (IA debole / IA forte / Machine learning)";
    question.noChoice = false;
    for (i = 0; i < orderLeft14.length; i++)
    {
        choice = new Array(2);;
        choice[0] = GetSelectedItemLeft("idDD14", i);
        choice[1] = GetSelextedItemRight("idDD14", i);
        if (choice[1]==='') question.noChoice=true;
        valuation = new Array();
        for (j = 0; j < listLeft14.length; j++)
        {
            if (listLeft14[j] === choice[0])
            {
                valuation.push(listRight14[j]);
            }
        }
        answer = new Answer(choice, valuation, 1, 0, '');
        question.answers.push(answer);
    }
    return question;

}


/* Code generated function */
function ClearQuestion15()
{
    ClearMatching("idDD14", 0);
    ClearMatching("idDD14", 1);
    ClearMatching("idDD14", 2);

}


/* Code generated function */
function CreateListLeft14()
{
    this.length = 3;
    this[0] = unescape(DecodeString("tkew/TOldoETwRqB"));
    this[1] = unescape(DecodeString("gGf5w+zNLF0="));
    this[2] = unescape(DecodeString("fyctWqDhZmU3O/6eLsh+Rg=="));

}

/* Code generated function */
function CreateListRight14()
{
    this.length = 3;
    this[0] = unescape(DecodeString("mWnt63ADGVrXtQLLkgwZ0UXZsQ4="));
    this[1] = unescape(DecodeString("bJz98oLNTQT6MHktuh4WPA=="));
    this[2] = unescape(DecodeString("IXvGGkN979d4VnTosHm36RDOb94snoQz"));

}

/* Code generated function */
function CreateListLeftHtml14()
{
    this.length = 3;

}





