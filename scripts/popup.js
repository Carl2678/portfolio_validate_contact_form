// Window POPUP Projects section STARTS here//

// Create array
 const projectspopup = [
  {
    name: 'Topic',
    feature: 'CANOPY',
    background: 'Back End Dev',
    year: '2015',
    image: 'images/desktop/tonic-project.svg',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tool1: 'html',
    tool2: 'css',
    tool3: 'javascript',
    linkLive: '#',
    linkSource: '#',
  },
  {
    name: 'Multi-Post Stories',
    feature: 'FACEBOOK',
    background: 'Full Stack Dev',
    year: '2015',
    image: 'images/desktop/multipostimg.svg',
    description:
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    tool1: 'html',
    tool2: 'css',
    tool3: 'javascript',
    linkLive: '#',
    linkSource: '#',
  },
  {
    name: 'Facebook 360',
    feature: 'FACEBOOK',
    background: 'Full Stack Dev',
    year: '2015',
    image: 'images/desktop/facebook360.svg',
    description:
      "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    tool1: 'html',
    tool2: 'css',
    tool3: 'javascript',
    linkLive: '#',
    linkSource: '#',
  },
  {
    name: 'Uber Navigation',
    feature: 'Uber',
    background: 'Lead Developer',
    year: '2018',
    image: 'images/desktop/ubernavigationimg.svg',
    description:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    tool1: 'html',
    tool2: 'css',
    tool3: 'javascript',
    linkLive: '#',
    linkSource: '#',
  },
];

const startingPoint = document.querySelector('.home-principal');

 function createModal() {
  startingPoint.insertAdjacentHTML(
    'afterend',
    `<div class='overlay'>
    <section class='modal'>
    <div class='modal__header flex'>
    <h2 class='project-name weight_font-700 size_font-32 height_font-44 color-new-800'></h2>
    <img  class='closeModal' src='images/desktop/close.svg' alt='close icon'></img>
    </div>
    <div class='modal__feature flex'>
    <p class="project-feature weight_font-600 size_font-13 height_font-16 color-new-600"></p>
    <ul class=" flex">
    <li class=" project-background weight_font-600 size_font-13 height_font-16 color-new-500"></li>
    <li class="project-year weight_font-600 size_font-13 height_font-16 color-new-500"> </li>
    </ul></div>
    <div class='image-project'><img class='modal__image project-image' src='' alt='project image'></img></div>
    <ul class='modal__dsc ul flex'>
    <li class='modal__dsc__first'><p class='project-description weight_font-400 size_font-15 height_font-24 color-new-600'></p></li>
    <li class="modal__dsc__second flex">
    <div class='flex'>
    <p class="project-tool1 weight_font-500 size_font-12 height_font-16 color-para-400 bg-para-50"></p>
    <p class="project-tool2 weight_font-500 size_font-12 height_font-16 color-para-400 bg-para-50"></p>
    <p class="project-tool3 weight_font-500 size_font-12 height_font-16 color-para-400 bg-para-50"></p>
    </div>
    <ul class='modal__btn ul flex'>
    <li>
    <a href='' class="btn link project-linkLive weight_font-500 size_font-17 height_line-24 color-para-500 blanc">See Live</a>
    </li>
    <li>
    <a href='' class="btn link project-linkSource weight_font-500 size_font-17 height_line-24 color-para-500 blanc">See Source</a>
    </li>
    </ul>
    </li>
    </ul>
    </section>
    </div>`,
  );
}


