import { Injectable, OnDestroy } from "@angular/core";
import { Subject, BehaviorSubject, fromEvent } from "rxjs";
import { takeUntil, debounceTime } from "rxjs/operators";
import { Router } from "@angular/router";

export interface Menu {
  headTitle1?: string;
  path?: string;
  title?: string;
  type?: string;
  active?: boolean;
  children?: Menu[];
}

@Injectable({
  providedIn: "root",
})
export class NavService implements OnDestroy {
  private unsubscriber: Subject<any> = new Subject();
  public screenWidth: BehaviorSubject<number> = new BehaviorSubject(window.innerWidth);
  public search: boolean = false;
  public language: boolean = false;
  public megaMenu: boolean = false;
  public levelMenu: boolean = false;
  public megaMenuColapse: boolean = window.innerWidth < 1199 ? true : false;
  public collapseSidebar: boolean = window.innerWidth < 991 ? true : false;
  public horizontal: boolean = window.innerWidth < 991 ? false : true;
  public fullScreen: boolean = false;

  constructor(private router: Router) {
    this.setScreenWidth(window.innerWidth);
    fromEvent(window, "resize")
      .pipe(debounceTime(1000), takeUntil(this.unsubscriber))
      .subscribe((evt: any) => {
        this.setScreenWidth(evt.target.innerWidth);
        if (evt.target.innerWidth < 991) {
          this.collapseSidebar = true;
          this.megaMenu = false;
          this.levelMenu = false;
        }
        if (evt.target.innerWidth < 1199) {
          this.megaMenuColapse = true;
        }
      });

    if (window.innerWidth < 991) {
      this.router.events.subscribe(() => {
        this.collapseSidebar = true;
        this.megaMenu = false;
        this.levelMenu = false;
      });
    }
  }

  ngOnDestroy() {
    this.unsubscriber.complete();
  }

  private setScreenWidth(width: number): void {
    this.screenWidth.next(width);
  }

  MENUITEMS: Menu[] = [
    {
      title: "Administrator",
      type: "sub",
      active: true,
      children: [
        {
          title: "Menu",
          type: "sub",
          active: false,
          children: [
            { path: "/admin/menu", title: "Data Menu", type: "link" },
          ],
        },
        // {
        //   title: "Layanan",
        //   type: "sub",
        //   active: false,
        //   children: [
        //     { path: "/admin/layanan", title: "Data Layanan", type: "link" },
        //   ],
        // },
        {
          title: "User",
          type: "sub",
          active: false,
          children: [
            { path: "/admin/role", title: "Data Role", type: "link" },
            { path: "/admin/user", title: "Data User", type: "link" },
          ],
        },
        {
          title: "Lahan",
          type: "sub",
          active: false,
          children: [
            { path: "/admin/status-lahan", title: "Data Status Lahan", type: "link" },
          ],
        },
        {
          title: "Sub Sektor",
          type: "sub",
          active: false,
          children: [
            { path: "/admin/sub-sektor", title: "Data Sub Sektor", type: "link" },
          ],
        },
        // {
        //   title: "Laporan",
        //   type: "sub",
        //   active: false,
        //   children: [
        //     { path: "/admin/kategori-laporan", title: "Data Kategori Laporan", type: "link" },
        //     // { path: "/admin/laporan", title: "Data Laporan", type: "link" },
        //   ],
        // },
        // {
        //   title: "Pemberitahuan",
        //   type: "sub",
        //   active: false,
        //   children: [
        //     { path: "/admin/pemberitahuan", title: "Data Pemberitahuan", type: "link" },
        //   ],
        // },
        {
          title: "API Fetcher",
          type: "sub",
          active: false,
          children: [
            { path: "/admin/api-fetcher", title: "Fetch API Data", type: "link" },
          ],
        },
        {
          title: "Module Generator",
          type: "sub",
          active: false,
          children: [
            { path: "/admin/module-generator", title: "Data Modul", type: "link" },
          ],
        },
        {
          title: "Pengaturan",
          type: "sub",
          active: false,
          children: [
            { path: "/admin/pengaturan", title: "Data Pengaturan", type: "link" },
          ],
        },
      ],
    },
  ];
  
  items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
}
