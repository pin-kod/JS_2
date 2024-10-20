function review() {
    let review = document.getElementById('review').value;
    if (review.length < 50 || review.length > 500) {
        alert('Некорректная длина, отзыв должен быть от 50 до 500 символов');
        return;
    }

    let container = document.getElementById('container');
    let reviewAdd = document.createElement('p');
    reviewAdd.innerText = review;

    if (container.childElementCount > 0) {

        container.insertBefore(reviewAdd, container.firstChild);
    } else {
        container.appendChild(reviewAdd);
    }
    document.getElementById('review').value = '';
}
