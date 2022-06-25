const BASE_URL = 'https://thatcopy.pw/catapi/rest/';

const getCats = async () => {
  try {
    const data = await fetch(BASE_URL);
    const json = await data.json();  
    console.log(json.webpurl);    
  } catch (error) {
    console.log(error.message);
  }
}

const loadImg = async () => {
  const catImg = document.getElementById('cat');
  catImg.src = await getCats();
}

const catBtn = document.getElementById('change-cat');
catBtn.addEventListener('click', loadImg);

loadImg();





