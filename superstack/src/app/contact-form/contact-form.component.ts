
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// // import { AngularFirestore } from '@angular/fire/compat/firestore';
// import emailjs from 'emailjs-com';

// @Component({
//   selector: 'app-contact-form',
//   templateUrl: './contact-form.component.html',
//   styleUrls: ['./contact-form.component.css']
// })
// export class ContactFormComponent implements OnInit {
//   title = "Contact Form";
//   ContactForm!: FormGroup;
//   isSubmit = false;
//   submitMessage = "";

//   // constructor(private formBuilder: FormBuilder, private firestore: AngularFirestore) { }
//   constructor(private formBuilder: FormBuilder) { }

//   ngOnInit() {
//     this.ContactForm = this.formBuilder.group({
//       name: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       msg: ['', Validators.required]
//     });
//   }

//   onSubmit() {
//     if (this.ContactForm.valid) {
//       const formData = this.ContactForm.value;

//       // Configure emailjs
//       emailjs.init('YOUR_USER_ID');

//       // Create email parameters
//       const emailParams = {
//         from_name: `${formData.name}`,
//         to_name: 'Rohitash Singh',
//         name: `${formData.name}`,
//         email: `${formData.email}`,
//         msg: `${formData.msg}`
//       };

//       // Send email
//       emailjs.send('service_j4nsfvg', 'template_o5qkaf4', emailParams, 'Oatx7iGncadHGWeH_')
//         .then((response) => {
//           // Email sent successfully
//           // console.log('Email sent:', response);

//           // Save form data to Firestore
//         //   this.firestore.collection('contacts').add(formData)
//         //     .then(() => {
//         //       this.submitMessage = "Message Sent Successfully";
//         //       this.ContactForm.reset();
//         //     })
//         //     .catch(error => {
//         //       console.error(error);
//         //       this.submitMessage = "Message not sent!!";
//         //     })
//         //     .finally(() => {
//         //       this.isSubmit = true;
//         //       setTimeout(() => {
//         //         this.isSubmit = false;
//         //       }, 5000);
//         //     });
//         })
//         .catch((error) => {
//           // Email sending failed
//           console.error('Email sending failed:', error);
//         });
//     }
//   }
// }



// *************************** send data in firbase and send email both ************************** //



// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { AngularFirestore } from '@angular/fire/compat/firestore';
// import emailjs from 'emailjs-com';

// @Component({
//   selector: 'app-contact-form',
//   templateUrl: './contact-form.component.html',
//   styleUrls: ['./contact-form.component.css']
// })
// export class ContactFormComponent implements OnInit {
//   title = "Contact Form";
//   ContactForm!: FormGroup;
//   isSubmit = false;
//   submitMessage = "";

//   constructor(private formBuilder: FormBuilder, private firestore: AngularFirestore) { }

//   ngOnInit() {
//     this.ContactForm = this.formBuilder.group({
//       name: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       msg: ['', Validators.required]
//     });
//   }

//   onSubmit() {
//     if (this.ContactForm.valid) {
//       const formData = this.ContactForm.value;

//       // Configure emailjs
//       emailjs.init('YOUR_USER_ID');

//       // Create email parameters
//       const emailParams = {
//         from_name: `${formData.name}`,
//         to_name: 'Rohitash Singh',
//         name: `${formData.name}`,
//         email: `${formData.email}`,
//         msg: `${formData.msg}`
//       };

//       // Send email
//       emailjs.send('service_j4nsfvg', 'template_o5qkaf4', emailParams, 'Oatx7iGncadHGWeH_')
//         .then((response) => {
//           // Email sent successfully
//           // console.log('Email sent:', response);

//           // Save form data to Firestore
//           this.firestore.collection('contacts').add(formData)
//             .then(() => {
//               this.submitMessage = "Message Sent Successfully";
//               this.ContactForm.reset();
//             })
//             .catch(error => {
//               console.error(error);
//               this.submitMessage = "Message not sent!!";
//             })
//             .finally(() => {
//               this.isSubmit = true;
//               setTimeout(() => {
//                 this.isSubmit = false;
//               }, 5000);
//             });
//         })
//         .catch((error) => {
//           // Email sending failed
//           console.error('Email sending failed:', error);
//         });
//     }
//   }
// }





// ********************************** send data to contact api ********************************* //

// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { AngularFirestore } from '@angular/fire/compat/firestore';

// @Component({
//   selector: 'app-contact-form',
//   templateUrl: './contact-form.component.html',
//   styleUrls: ['./contact-form.component.css']
// })
// export class ContactFormComponent implements OnInit {
//   title = "Contact Form";
//   ContactForm!: FormGroup;
//   isSubmit = false;
//   submitMessage = "";

//   constructor(private formBuilder: FormBuilder, private firestore: AngularFirestore) { }

//   ngOnInit() {
//     this.ContactForm = this.formBuilder.group({
//       name: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       msg: ['', Validators.required]
//     });
//   }

//   onSubmit() {
//     if (this.ContactForm.valid) {
//       const formData = this.ContactForm.value;

//       this.firestore.collection('contacts').add(formData)
//         .then(() => {
//           this.submitMessage = "Message Sent Successfully";
//           this.ContactForm.reset();
//         })
//         .catch(error => {
//           console.error(error);
//           this.submitMessage = "Message not sent!!";
//         })
//         .finally(() => {
//           this.isSubmit = true;
//           setTimeout(() => {
//             this.isSubmit = false;
//           }, 5000);
//         });
//     }
//   }
// }
















import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import axios from 'axios';
// import { FormsModule } from '@angular/forms'; 

// import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  title = "Contact Form";

  ContactForm!: FormGroup;
  isSubmit = true;
  submitMessage = "";

  // contactCollection!: AngularFirestoreCollection<any>;
  // constructor(private formBuilder: FormBuilder, private afs: AngularFirestore) { 
  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    // this.contactCollection = this.afs.collection('contacts');

    this.ContactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      msg: ['', Validators.required],
      phone: ['', Validators.required],
      gst: ['', Validators.required],
      pan: ['', Validators.required],
      kyc_update: [''],
      prod_details: [''],
      state: [''],
      details: ['']
    });
  }

  onSubmit() {
    if (this.ContactForm.valid) {
      const formData = this.ContactForm.value;
      console.log(formData.kyc_update);
      console.log(formData.details)
      console.log(formData.prod_details)

      axios
        .post('http://localhost:8000/contact', formData)
        .then(response => {
          console.log(response);
          this.submitMessage = "Message Sent Successfully";
          this.ContactForm.reset();
        })
        .catch(error => {
          console.error(error);
          this.submitMessage = "Message not sent!!";
        })
        .finally(() => {
          this.isSubmit = true;
          setTimeout(() => {
            this.isSubmit = false;
          }, 5000);
        });
    }
  }

}
