sizeCanvas();
window.addEventListener('resize', sizeCanvas);

if (document.readyState === 'complete') {
    onReady();
} else {
    document.onreadystatechange = ev => {
        if (document.readyState === 'complete') {
            onReady();
        }
    };
}

function onReady() {
    hideLoading();
}

function sizeCanvas() {
    let canvas = document.querySelector('#unity-canvas');
    canvas.style.height = window.innerHeight + 'px';
    canvas.style.width = window.innerWidth + 'px';
    console.log("canvas size set");
    centerLoadingNotification();
}

function centerLoadingNotification() {
    let loadingNotifier = document.querySelector('#loadingNotifier');
    loadingNotifier.style.left = window.innerWidth * 0.5 + 'px';
    loadingNotifier.style.top = window.innerHeight * 0.5 + 'px';
}

function showLoading() {
    document.querySelector('#loadingNotifier').style.display = 'block';
}

function hideLoading() {
    document.querySelector('#loadingNotifier').style.display = 'none';
}