import { Component } from "@angular/core";
import { LandStatusService } from "../land-status.service";
import { Subject, debounceTime, distinctUntilChanged, switchMap, Observable, of } from "rxjs";
import { LoadingService } from "../../../../_services/loading.service";

const Swal = require("sweetalert2")

@Component({
  selector: "app-land-status-list",
  templateUrl: "./land-status-list.component.html",
  styleUrls: ["./land-status-list.component.scss"]
})
export class LandStatusListComponent {
  private searchTerms = new Subject<string>();
  private totalRecords: number = 0;
  private sortedColumnIndex: number | null = null;
  private selectedIds: string[] = []; 
  private selectedNames: string[] = []; 
  public sec1_title: string = "Data Status Lahan";
  public data: any[] = [];
  public filter: any = {
    search: "",
    sortBy: "id",
    sortOrder: "desc",
    page: 1,
    pageSize: 10,
  }
  public currentPage: number = 1;
  public pageSize: number = 10;
  public totalPages: number = 0; 
  public selectedPageSize: number = 10;
  public sortE: string = "<i class='fa fa-sort'></i>";
  public isDelete: boolean = false;
  public visible: boolean = false;
  public activeLabel: string = "";

  constructor(private landStatusService: LandStatusService, public loadingService: LoadingService) { }

  ngOnInit(): void {
    this.searchTerms
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((term: string) => this.search(term))
      )
      .subscribe();

    this.landStatusService.visibleChanged.subscribe((value) => {
      this.visible = value;
    });

    this.landStatusService.getLabel().subscribe((label) => {
      this.activeLabel = label;
    });

    this.landStatusService.loadData$.subscribe(() => {
      this.loadData();
    });
      
    this.loadingService.showLoading();
    this.loadData();
  }

  loadData(): void {
    this.loadingService.showLoading();

    this.landStatusService.getList(this.filter).subscribe({
      next: res => {
        this.data = res.data.row;
        this.totalRecords = res.data.pagination.TotalRecords;
        this.calculateTotalPages();
        this.loadingService.hideLoading();
      },
      error: err => {
        console.log(err);
      }
    })
  }

  exportData() {
    this.landStatusService.exportData().subscribe((response: Blob) => {
      const url = window.URL.createObjectURL(response);
      const a = document.createElement("a");
      a.href = url;
      a.download = this.sec1_title + ".xlsx";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    });
  }

  calculateTotalPages(): void {
    this.totalPages = Math.ceil(this.totalRecords / this.pageSize);
  }

  onPageChange(newPage: number): void {
    this.currentPage = newPage;
    this.filter.page = newPage;
    this.loadData();
  }

  onPageSizeChange(newPageSize: number): void {
    this.pageSize = newPageSize;
    this.currentPage = 1;
    this.filter.page = this.currentPage;
    this.filter.pageSize = newPageSize; 
    this.loadData();
  }

  getPagesArray(): number[] {
    const pagesArray: number[] = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pagesArray.push(i);
    }
    return pagesArray;
  }

  sort(columnIndex:number, str: string): void {
    if (this.filter.sortBy === str) {
      this.filter.sortOrder = this.filter.sortOrder === "asc" ? "desc" : "asc";
    } else {
      this.filter.sortOrder = "desc";
      this.filter.sortBy = str;
    }
    this.sortedColumnIndex = columnIndex;
    this.loadData();
  }

  changePageSize(): void {
    this.filter.pageSize = this.selectedPageSize;
    this.loadData();
  }

  resetIDs(): void {
    this.isDelete = false;
    this.selectedIds = [];
  }

  doCreate(): void {
    this.resetIDs();
    this.landStatusService.setID(null);
    this.landStatusService.setLabel("Data Baru");
    this.landStatusService.toggleVisible();
  }

  doEdit(id: string) {
    this.resetIDs();
    this.landStatusService.setLabel("Edit Data");
    this.landStatusService.setID(id);
    this.landStatusService.toggleVisible();
  }

  isSorted(columnIndex: number): boolean {
    return this.sortedColumnIndex === columnIndex;
  }

  search(term: string): Observable<any[]>{
    if (term.length <= 0 || term.length >= 3) {
      this.loadingService.showLoading();
      this.filter.search = term.toLocaleLowerCase();
      this.loadData();
    }

    return of([]);
  }

  onSearchInput(event: any): void {
    const term = event.target.value;
    this.loadingService.showLoading();
    this.searchTerms.next(term);
  }

  onCheckboxChange(id: string, name: string): void {
    const index = this.selectedIds.indexOf(id);
    const nameIndex = this.selectedNames.indexOf(name);
    if (index === -1) {
      this.selectedIds.push(id);
    } else {
      this.selectedIds.splice(index, 1);
    }

    if (nameIndex === -1) {
      this.selectedNames.push(name);
    } else {
      this.selectedNames.splice(nameIndex, 1);
    }

    this.isDelete = this.selectedNames.length > 0;
  }

  isSelected(name: string): boolean {
    return this.selectedNames.includes(name);
  }

  doDelete(): void {
    if (this.selectedIds.length > 0) {
      Swal.fire({
        title: "Hapus Data ?",
        text: "Yakin hapus data yang anda pilih?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No"
      }).then((result) => {
        if (result.isConfirmed) {
          this.loadingService.showLoading();
          this.landStatusService.deleteData(this.selectedIds).subscribe({
            next: () => {
              this.selectedIds = [];
              this.isDelete = this.selectedIds.length > 0;
              this.loadingService.hideLoading();
              this.loadData();
            },
            error: (err) => {
              console.error(err);
              this.loadingService.hideLoading();
            }
          });
        }
      });
    }
  }
}
