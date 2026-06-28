const ScrollBtn = document.getElementById('ScrollBtn');
window.addEventListener('scroll', function () {
  if (window.scrollY > 1000) {
    ScrollBtn.style.display = 'block';
  } else {
    ScrollBtn.style.display = 'none';
  }
});

ScrollBtn.addEventListener('click', function () 
{
  window.scrollTo({
    top: 0,
  });
});


const AuthBtn = document.getElementById('AuthBtn');
const Authorisation = document.querySelector('.Authorisation');
AuthBtn.addEventListener('click', function () 
{
  if (BurgerBtn.classList.contains('open'))
  {
    Navigation.classList.remove('open');
    BurgerBtn.classList.remove('open');
  }
  if (Authorisation.classList.contains('show'))
  {
    Authorisation.classList.remove('show');
  }
  else
  {
    Authorisation.classList.add('show');
  }
});  
AuthCloseBtn.addEventListener('click', function () 
{
  Authorisation.classList.remove('show');
});


const BurgerBtn = document.getElementById('BurgerBtn');
const Navigation = document.querySelector('.navigation');

BurgerBtn.addEventListener('click', function () {
  Navigation.classList.toggle('open');
  BurgerBtn.classList.toggle('open');
  if (Authorisation.classList.contains('show'))
  {
    Authorisation.classList.remove('show');
  }
});
BurgerClose.addEventListener('click', function () {
  Navigation.classList.remove('open');
  BurgerBtn.classList.remove('open');
});



const Cookie = document.getElementById('Cookie');
const CookieAcceptBtn = document.getElementById('CookieAcceptBtn');
if (!localStorage.getItem('cookieAccepted')) {
  Cookie.classList.add('show');
}
CookieAcceptBtn.addEventListener('click', function () {
  Cookie.classList.remove('show');
  localStorage.setItem('cookieAccepted', 'true');
});



const guidesGrid = document.getElementById('GuidesGrid');
const loadGuidesBtn = document.getElementById('loadGuidesBtn');

async function loadGuides() {
  guidesGrid.innerHTML = '<p>იტვირთება...</p>';

  try {
    const response = await fetch('https://randomuser.me/api/?results=3');
    const data = await response.json();

    guidesGrid.innerHTML = '';

    data.results.forEach(function (person) {
      guidesGrid.innerHTML += `
        <div class="card">
          <img src="${person.picture.medium}" alt="გიდი" />
          <h3>${person.name.first} ${person.name.last}</h3>
          <span>გიდი &middot; ${person.location.country}</span>
        </div>
      `;
    });

  } catch (error) {
    guidesGrid.innerHTML = '<p>გიდების ჩატვირთვა ვერ მოხერხდა.</p>';
  }
}

loadGuidesBtn.addEventListener('click', loadGuides);
loadGuides();


document.getElementById('ShowPass').addEventListener('click', function() {
  const p = document.getElementById('password');
  p.type = 'text';
  document.getElementById('ShowPass').style.display = 'none';
  document.getElementById('ShowPass2').style.display = 'block';
});

document.getElementById('ShowPass2').addEventListener('click', function() {
  const p = document.getElementById('password');
  p.type = 'password';
  document.getElementById('ShowPass2').style.display = 'none';
  document.getElementById('ShowPass').style.display = 'block';
});