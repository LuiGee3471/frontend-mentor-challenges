const questions = document.querySelectorAll('article h2');
const answers = document.querySelectorAll('article p');

const article = document.getElementById('faq');

article.addEventListener('click', onClickArticle);

function onClickArticle(event) {
    const target = event.target;
    if (target.tagName !== 'H2') {
        return;
    }

    if (target.classList.contains('active')) {
        deactivateQuestion(target);
    } else {
        questions.forEach(question => {
            deactivateQuestion(question);
        });
        activateQuestion(target);
    }

    
}

function activateQuestion(question) {
    question.classList.add('active');
    question.nextElementSibling.classList.remove('hidden');
}

function deactivateQuestion(question) {
    question.classList.remove('active');
    question.nextElementSibling.classList.add('hidden');
}