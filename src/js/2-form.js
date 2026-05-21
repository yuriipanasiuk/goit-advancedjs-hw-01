const refs = {
  feedbackForm: document.querySelector('.feedback-form'),
};

const FORM_KEY = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

const onFormChangeField = ({ target: formFieldEl }) => {
  try {
    const formFieldName = formFieldEl.name;

    formData[formFieldName] = formFieldEl.value;
    localStorage.setItem(FORM_KEY, JSON.stringify(formData));
  } catch (e) {
    console.log(e);
  }
};

const onSubmitForm = e => {
  e.preventDefault();

  const formDataValues = Object.values(formData);

  if (formDataValues.includes('')) {
    alert('ПОЛЯ ФОРМИ ПОВИННІ БУТИ ЗАПОВНЕННІ !!!');
    return;
  }
  console.log(formData);

  e.currentTarget.reset();
  localStorage.removeItem(FORM_KEY);
};

const onDownloadPage = () => {
  try {
    const formElements = refs.feedbackForm.elements;
    const formDataKeys = Object.keys(formElements);

    const storageData = JSON.parse(localStorage.getItem(FORM_KEY));

    if (!storageData) {
      return;
    }

    formData = storageData;

    formDataKeys.forEach(key => {
      formElements[key].value = storageData[key];
    });
  } catch (e) {
    console.log(e);
  }
};

refs.feedbackForm.addEventListener('change', onFormChangeField);
refs.feedbackForm.addEventListener('submit', onSubmitForm);
addEventListener('DOMContentLoaded', onDownloadPage);
