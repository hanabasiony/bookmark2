
var allSites = []

if (localStorage.getItem('allSitesLS') != null) {
  allSites = JSON.parse(localStorage.getItem('allSitesLS'))
  displayAllBookmarks()

}

var submitBtn = document.getElementById('add-botn')

var siteNameInput = document.getElementById('site-name')
var siteUrlInput = document.getElementById('site-URL')

var validationModal = new bootstrap.Modal(document.getElementById("exampleModal"));


function addSite() {

  if (document.getElementById('add-botn').innerHTML == "uppdate") {
    realUpdate()
    document.getElementById('add-botn').innerHTML = "Submit"



  } else {


    if (validateSiteName() && validateSiteURL()) {



      var newBookMark = {
        name: siteNameInput.value,
        url: siteUrlInput.value
      }


      allSites.push(newBookMark)

      localStorage.setItem('allSitesLS', JSON.stringify(allSites))

      console.log(allSites)


      displayAllBookmarks()
      resetForm()

    } else {

      validationModal.show();

    }

  }
  resetForm()

}


function displayAllBookmarks() {


  var cartoona = "";

  for (var i = 0; i < allSites.length; i++) {
    cartoona = cartoona + `
        <div class="row table-row">
        <div class="col-2 ">
            ${i}
        </div>
        <div class="col-2 ">
            ${allSites[i].name}
        </div>
        <div class="col-3 ">
          <div class="">
            <button class="visit-botn">
              <a href="https://${allSites[i].url}" target="_blank">
                <i class="fa-solid fa-eye"></i>
                visit
              </a>
            </button>
          </div>
        </div>
        <div class="col-3 ">
          <div class="">
            <button onclick="updateSite(${i})" class="update-botn">
                <i class="fa-solid fa-pen"></i>
                Update
              </a>
            </button>
          </div>
        </div>
        <div class="col-2 ">
          <div class="">
            <button onclick="deleteBookmark(${i})" class="delete-botn">
                <i class="fa-solid fa-trash"></i>
                Delete
              </a>
            </button>
          </div>
        </div>
      </div>`
  }

  document.getElementById('adding-bookmarks-html').innerHTML = cartoona;

}


function resetForm() {
  siteNameInput.value = ""
  siteUrlInput.value = ""
}


function deleteBookmark(index) {
  document.getElementById('add-botn').innerHTML ="Submit"
  allSites.splice(index, 1)
  displayAllBookmarks()
  localStorage.setItem('allSitesLS', JSON.stringify(allSites))


}

var index2;

function updateSite(index) {
  index2 = index;
  var siteNameGetValue = allSites[index].name
  siteNameInput.value = siteNameGetValue
  document.getElementById('add-botn').innerHTML = "uppdate"

}

function realUpdate() {
  var siteNameUpdated = siteNameInput.value

  allSites[index2].name = siteNameUpdated
  localStorage.setItem('allSitesLS', JSON.stringify(allSites))

  displayAllBookmarks()
}

var searchInput = document.getElementById('search')

searchSite()

function searchSite(term) {

  var cartoona = ""

  for (i = 0; i < allSites.length; i++) {

    if (allSites[i].name.toLowerCase().includes(term)) {
      cartoona = cartoona + `
        <div class="row table-row">
        <div class="col-3 ">
            ${i}
        </div>
        <div class="col-3 ">
            ${allSites[i].name}
        </div>
        <div class="col-2 ">
          <div class="">
            <button class="visit-botn">
              <a href="https://${allSites[i].url}" target="_blank">
                <i class="fa-solid fa-eye"></i>
                visit
              </a>
            </button>
          </div>
        </div>
        <div class="col-2 ">
          <div class="">
            <button onclick="updateSite(${i})" class="update-botn">
                <i class="fa-solid fa-pen"></i>
                Update
              </a>
            </button>
          </div>
        </div>
        <div class="col-2 ">
          <div class="">
            <button onclick="deleteBookmark(${i})" class="delete-botn">
                <i class="fa-solid fa-trash"></i>
                Delete
              </a>
            </button>
          </div>
        </div>
      </div>`
    }



    document.getElementById('adding-bookmarks-html').innerHTML = cartoona;

  }
}

displayAllBookmarks()


var siteNameRegex = /^[a-z0-9A-Z]{3,12}$/
function validateSiteName() {

  return siteNameRegex.test(siteNameInput.value);
}


var siteURLRegex = /^(https?:\/\/)?([\wW.-]+)\.([a-z]{2,})(:[0-9]{1,5})?(\/.*)?$/i
function validateSiteURL() {

  return siteURLRegex.test(siteUrlInput.value)
}

function validateDesignName(value) {

  if (siteNameRegex.test(value)) {
    console.log(value);

    siteNameInput.classList.remove("is-invalid")
    siteNameInput.classList.add("is-valid")

  } else {

    siteNameInput.classList.remove("is-valid")
    siteNameInput.classList.add("is-invalid")
    console.log(value);


  }

}

function validateDesignUrl(value) {

  if (siteURLRegex.test(value)) {
    console.log(value);

    siteUrlInput.classList.remove("is-invalid")
    siteUrlInput.classList.add("is-valid")

  } else {

    siteUrlInput.classList.remove("is-valid")
    siteUrlInput.classList.add("is-invalid")
    console.log(value);


  }

}