import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="insert-in-list"
export default class extends Controller {
  static targets = ["items", "form"]
  static values = { position: String }
  connect() {
    this.csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute("content")
  }

  send(event) {
    event.preventDefault()

    fetch(this.formTarget.action, {
      method: "POST",
      headers: { "Accept": "application/json", "X-CSRF-Token": this.csrfToken },
      body: new FormData(this.formTarget)
    })
      .then(response => response.json())
      .then((data) => {
        // console.log(data.my_form)
        // console.log(data.my_inserted_item)
        if (data.my_inserted_item) {
          this.itemsTarget.insertAdjacentHTML(this.positionValue, data.my_inserted_item)
        }
        this.formTarget.outerHTML = data.my_form
      })
  }
}
