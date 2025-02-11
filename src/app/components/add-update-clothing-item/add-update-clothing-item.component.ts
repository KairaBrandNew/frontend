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
import { HomeService } from '../home/home.service';
import { AsyncPipe } from '@angular/common';
import { map, Observable, startWith } from 'rxjs';

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
    AsyncPipe,
  ],
  templateUrl: './add-update-clothing-item.component.html',
  styleUrl: './add-update-clothing-item.component.scss',
})
export class AddUpdateProductItemComponent {
  clothingForm: FormGroup;
  categories!: Observable<string[]>;
  sleeveType!: Observable<string[]>;
  productTypes!: Observable<string[]>;
  seasons!: Observable<string[]>;
  sizes: string[] = [];
  colors!: Observable<string[]>;
  fitType!: Observable<string[]>;
  attributes: any;
  errorMessage!: string;
  filteredOptions!: Observable<string[]>;

  constructor(private fb: FormBuilder, private homeService: HomeService) {
    this.clothingForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      fit: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', Validators.required],
      actualPrice: [null, [Validators.min(1), Validators.max(100)]],
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

  ngOnInit(): void {
    // Fetch all attributes grouped by type
    this.getAllAttributes();
  }

  // Method to get all attributes grouped by type
  getAllAttributes(): void {
    this.homeService.getAllAttributes().subscribe(
      (data) => {
        this.attributes = data;
        this.initializeFilteredOptions();
      },
      (error) => {
        this.errorMessage = `Error fetching attributes: ${error.message}`;
      }
    );
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
      this.homeService.addClothingItems(this.clothingForm.value);
    }
  }

  // Initialize filteredOptions after dynamic data is fetched
  private initializeFilteredOptions() {
    this.productTypes = this._initializeFilter('productType');
    this.colors = this._initializeFilter('color');
    this.categories = this._initializeFilter('category');
    this.seasons = this._initializeFilter('season');
    this.sleeveType = this._initializeFilter('sleeveType');
    this.sizes = this.attributes.size;

  }

  // Generalized filtering logic
  private _initializeFilter(
    attribute: Extract<keyof typeof this.attributes, string | number>
  ): Observable<string[]> {
    return this.clothingForm.controls[attribute].valueChanges.pipe(
      startWith(''),
      map((value) => this._filterOptions(value || '', attribute))
    );
  }

  private _filterOptions(
    value: string,
    attribute: keyof typeof this.attributes
  ): string[] {
    const filterValue = value.toLowerCase(); // Case-insensitive search
    return (
      this.attributes[attribute]?.filter((option: string) =>
        option.toLowerCase().includes(filterValue)
      ) || []
    );
  }
}
