const formData = { email: "", message: "" };

const savedFormData = localStorage.getItem("feedback-form-state");
if (savedFormData) {
  const parsedData = JSON.parse(savedFormData);
  formData.email = parsedData.email;
  formData.message = parsedData.message;
}

document.querySelector(".feedback-form").addEventListener("input", (event) => {
  formData[event.target.name] = event.target.value;
  localStorage.setItem("feedback-form-state", JSON.stringify(formData));
});

document.querySelector(".feedback-form").addEventListener("submit", (event) => {
  event.preventDefault();

  if (formData.email === "" || formData.message === "") {
    alert("Fill please all fields");
  } else {
    console.log(formData);
    localStorage.removeItem("feedback-form-state");
    formData.email = "";
    formData.message = "";
    document.querySelector('input[name="email"]').value = "";
    document.querySelector('textarea[name="message"]').value = "";
  }
});

