import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { NgxImageCompressService } from 'ngx-image-compress';

const Swal = require('sweetalert2')

@Component({
  selector: 'app-service-cu',
  templateUrl: './service-cu.component.html',
  styleUrls: ['./service-cu.component.scss']
})
export class ServiceCuComponent {
  sec1_title: string = 'Data Layanan';
  sec2_title: string = 'API Request';
  sec3_title: string = 'API Preview';
  imageName: string;
  previewImage: string | ArrayBuffer;
  originalImage: File;
  options$: Observable<number[]>;

  constructor(private imageCompress: NgxImageCompressService) {
    this.options$=of([1,2,3,4,5,6]);
   }

  ngOnInit(): void { }

  onFileSelected(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const file = inputElement.files[0];
    if (file) {
      // Check if the file is a valid image and size
      if (this.isValidImageFile(file)) {
        // Generate a prefixed image name
        this.imageName = `ppt_${file.name}`;

        // Create a FileReader to read and display the image
        const reader = new FileReader();
        reader.onload = (e) => {
          this.previewImage = e.target.result as string;
        };
        reader.readAsDataURL(file);
      } else {
        this.imageName = 'Invalid image';
        this.previewImage = null; // Clear the preview if the image is invalid
      }
    }

    this.clearPreview();
  }

  compressImage(): void {
    if (this.originalImage) {
      this.imageCompress.uploadFile().then(({ image, orientation }) => {
        // 'image' contains the compressed image data
        // 'orientation' contains the orientation information (useful for correcting image rotation)

        // Save the compressed image in your Angular project
        // Implement the saving logic here

        // Optionally, you can display the compressed image as the preview
        this.previewImage = image;

        // Reset the input value after compression
        this.clearInputValue();
      });
    } else {
      console.error('No image selected for compression.');
    }
  }

  confirmImageRemoval(): void {
    if (this.previewImage) {
      Swal.fire({
        title: 'Remove Image',
        text: 'Are you sure you want to remove the image?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.isConfirmed) {
          // User confirmed, remove the image preview and reset the input value
          this.clearPreview();
        }
      });
    }
  }

  clearPreview(): void {
    this.imageName = null;
    this.previewImage = null;
    // Clear the input value by resetting it
    const inputElement = document.querySelector('input[type="file"]') as HTMLInputElement;
    if (inputElement) {
      inputElement.value = '';
    }
  }

  clearInputValue(): void {
    // Clear the input value by resetting it
    const inputElement = document.querySelector('input[type="file"]') as HTMLInputElement;
    if (inputElement) {
      inputElement.value = '';
    }
  }

  isValidImageFile(file: File): boolean {
    const allowedTypes = ['image/jpeg', 'image/png'];
    const maxFileSize = 1 * 1024 * 1024; // 1MB

    return allowedTypes.includes(file.type) && file.size <= maxFileSize;
  }

  uploadImage(): void {
    if (this.imageName && this.imageName !== 'Invalid image') {
      // You can now send this.imageName to your backend API
      // Implement the backend API call here
    } else {
      console.error('Invalid image. Cannot upload.');
    }
  }
}
