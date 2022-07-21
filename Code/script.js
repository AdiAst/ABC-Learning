// $(document).ready(function () {
//   $("head").html(`
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <link rel="stylesheet" href="styles.css" />
//     <link
//       rel="stylesheet"
//       href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
//     />
// `);
// });
$("#nav").html(`
<a href="index.html">
<img src="src/img/logo.png" alt="logo" />
</a>
      <div class="form">
        <input
          type="text"
          id="search"
          placeholder="Search any content here..."
        />
        <button onclick="search()" class="button">
          <i class="fa fa-search"></i>
        </button>
      </div>
      <span href="course.html" class='cnav'>Course 
      <ul>
          <a href='course.html?status=java'><li>Java</li></a>      
          <a href='course.html?status=net'><li>.Net</li></a>      
          <a href='course.html?status=html'><li>HTML</li></a>
          <a href='course.html?status=mo'><li>Microsoft Office</li></a>        
      </ul>
      </span>
      <a href="course-schedule.html">Course Schedule</a>
  `);

$("footer").html(`
<div class="container">
        <div style="text-align: left">
          <h3>ABC Learning Center</h3>
          <p>
            ABC Learning <br />
            Ngurah Rai street,<br />
            West Denpasar <br />
            Bali 8022
          </p>
        </div>
        <div>
          <h3>Help</h3>
          <p>
            If get confused with our web stucture <br />
            you can always check our <a href="sitemap.html">Sitemap</a>, <br />
            there is a lot of our website <br />
            link over there.
          </p>
        </div>
        <div>
          <h3>Company</h3>
          <a href="about-us.html">About Us</a> <br />
          <a href="privacy-policy.html">Privacy & Policy</a> <br />
          <a href="contact-us.html">Contact Us</a><br />
          <a href="sitemap.html">Sitemap</a>
        </div>
      </div>
`);
$(".cnav").hover(
  function () {
    $(".cnav ul").slideDown("slow");
  },
  function () {
    $(".cnav ul").slideUp("slow");
  }
);
