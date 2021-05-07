const questions = document.querySelectorAll('article h2');
const answers = document.querySelectorAll('article p');

const article = document.getElementById('faq');

article.addEventListener('click', onClickArticle);

function onClickArticle(event) {
    const target = event.target;
    if (target.tagName === 'H2') {
        onClickQuestion(target);
    }
}

function onClickQuestion(question) {
    question.classList.toggle('active');
    question.nextElementSibling.classList.toggle('hidden');
}