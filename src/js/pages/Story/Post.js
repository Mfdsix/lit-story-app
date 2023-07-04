import '../../components/pages/Story/post';

const Post = {
  init() {
    this._draw();
    this._initializeListener();
  },

  _draw() {
    const form = document.createElement('post-form');
    form.setAttribute('form-id', 'post-form');

    document.querySelector('main').append(form);
  },

  _initializeListener() {
    setTimeout(() => {
      const form = document.querySelector('#post-form');
      form.addEventListener(
        'submit',
        (event) => {
          event.preventDefault();
          event.stopPropagation();

          form.classList.add('was-validated');
          this._sendPost();
        },
        false,
      );
    }, 500);
  },

  _sendPost() {
    const formData = this._getFormData();
    console.log(formData);

    if (this._validateFormData({ ...formData })) {
      window.location.href = '/';
    }
  },

  _getFormData() {
    const image = document.querySelector('input[name="gambar"]');
    const deskripsi = document.querySelector('textarea[name="deskripsi"]');

    return {
      image: image.files,
      deskripsi: deskripsi.value,
    };
  },

  _validateFormData(formData) {
    const formDataFiltered = Object.values(formData).filter(
      (item) => item === '' || item.length == 0 || item == null || item == undefined,
    );
    console.log('filtered', formDataFiltered);

    return formDataFiltered.length === 0;
  },
};

export default Post;
