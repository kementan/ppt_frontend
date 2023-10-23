import { OnInit, Component, EventEmitter, Output, Input } from "@angular/core";
import { SelectRoleService } from "./select-role.service";

@Component({
  selector: "app-select-role",
  templateUrl: "./select-role.component.html",
  styleUrls: ["./select-role.component.scss"]
})
export class SelectRoleComponent implements OnInit {
  @Output() roleSelected = new EventEmitter<string>();
  @Input() listType: "public" | "private"; 
  @Input() selectedLabelName: string;

  data : any[];
  selectedRoleId: string;

  constructor(private service: SelectRoleService) { }

  ngOnInit(): void {
    if (this.listType === "public") {
      this.service.getPublicList().subscribe({
        next: (res) => {
          this.data = res.data || [];
        },
        error: (err) => {
          console.log(err);
        }
      });
    } else if (this.listType === "private") {
      this.service.getPrivateList().subscribe({
        next: (res) => {
          this.data = res.data || [];
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
  }

  ngOnChanges(): void {
    // When selectedLabelName changes, find the corresponding ID
    if (this.selectedLabelName && this.data) {
      const selectedRole = this.data.find(item => item.name === this.selectedLabelName);
      if (selectedRole) {
        this.selectedRoleId = selectedRole.id;
      }
    }
  }

  onRoleSelected(roleId: string) {
    this.selectedRoleId = roleId;
    this.roleSelected.emit(roleId);
  }
}
