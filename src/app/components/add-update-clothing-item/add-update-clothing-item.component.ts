import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-add-update-clothing-item',
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatAutocompleteModule,
  ],
  templateUrl: './add-update-clothing-item.component.html',
  styleUrl: './add-update-clothing-item.component.scss',
})
export class AddUpdateProductItemComponent {
  clothingForm: FormGroup;
  categories: string[] = ['Men', 'Women', 'Kids'];
  sleeveType: string[] = [
    'Standard Short Sleeves',
    'Cap Sleeves',
    'Half Sleeves',
    'Full Sleeves',
    '3/4 Sleeves',
    'Raglan Sleeves',
    'Kimono Sleeves',
    'Batwing Sleeves',
    'Roll-Up Sleeves',
    'Cuffed Sleeves',
    'Bishop Sleeves',
    'Bell Sleeves',
    'Slit Sleeves',
    'Dolman Sleeves',
    'Puffed Sleeves',
  ];
  productTypes: string[] = [
    'Round Neck',
    'V-Neck',
    'Polo Shirts',
    'Henley Shirts',
    'Checked Shirts',
    'Striped Shirts',
    'Plain Shirts',
    'Graphic T-Shirts',
    'Full Sleeve Shirts',
    'Half Sleeve Shirts',
    '3/4 Sleeve Shirts',
    'Short Sleeve Shirts',
    'Tank Tops',
    'Sweaters',
    'Hoodies',
    'Jackets',
    'Blazers',
    'Coats',
    'Suits',
    'Kurta',
    'Sherwani',
    'Casual Shirts',
    'Formal Shirts',
    'Denim Shirts',
    'Bomber Jackets',
    'Trench Coats',
    'Windcheaters',
    'Puffer Jackets',
    'Raincoats',
    'Turtleneck Shirts',
  ];
  seasons: string[] = ['Summer', 'Winter', 'Spring', 'Autumn'];
  sizes: string[] = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  colors: string[] = [
    'Red',
    'Blue',
    'Green',
    'Black',
    'White',
    'Yellow',
    'Orange',
    'Purple',
    'Pink',
    'Brown',
    'Grey',
    'Cyan',
    'Magenta',
    'Maroon',
    'Beige',
    'Teal',
    'Navy',
    'Olive',
    'Gold',
    'Silver',
    'Charcoal',
    'Ivory',
    'Lavender',
    'Peach',
    'Coral',
    'Mint',
    'Turquoise',
    'Burgundy',
    'Mustard',
    'Khaki',
  ];

  constructor(private fb: FormBuilder) {
    this.clothingForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      fit: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', Validators.required],
      actualPrice: [null, [Validators.min(1)]],
      category: ['', Validators.required],
      productType: ['', Validators.required],
      season: [''],
      size: ['', Validators.required],
      color: ['', Validators.required],
      stock: [null, [Validators.required, Validators.min(0)]],
      salePrice: [
        null,
        [Validators.required, Validators.min(0), Validators.max(100)],
      ],
      isTrending: [false],
      isLatest: [false],
      isSpareButtonAvailable: [false],
      imageUrls: this.fb.array([this.createImageUrl()]),
      washCareDescribe: ['', [Validators.minLength(3)]],
      fabricType: ['', [Validators.minLength(3)]],
      designType: ['', [Validators.minLength(3)]],
      patternType: ['', [Validators.minLength(3)]],
      sleeveType: ['', [Validators.minLength(3)]],
    });
  }
  

  // Helper function to create a form control for image URL
  createImageUrl(): FormGroup {
    return this.fb.group({
      url: ['', Validators.required],
    });
  }

  get imageUrls(): FormArray {
    return this.clothingForm.get('imageUrls') as FormArray;
  }

  addImageUrl() {
    this.imageUrls.push(this.createImageUrl());
  }

  removeImageUrl(index: number) {
    this.imageUrls.removeAt(index);
  }

  onSubmit() {
    if (this.clothingForm.valid) {
      console.log('Form submitted:', this.clothingForm.value);
    }
  }
}
