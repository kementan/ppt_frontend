
export interface Task {
	text: string
	completed: boolean
	priority: string
	badgeClass: string
	Date: string
}

export const task: Task[] = [
	{
        text: "Submenu data 1 pada main menu",
        priority: "In progress",
        badgeClass: "badge-light-primary",
        Date: "16 Jan",
        completed: false
    },
    {
        text: "Submenu data 1 pada main menu",
        priority: "Pending",
        badgeClass: "badge-light-danger",
        Date: "04 Aug",
        completed: false
    },
    {
        text: "Submenu data 1 pada main menu",
        priority: "Done",
        badgeClass: "badge-light-success",
        Date: "25 Feb",
        completed: true
    },
    {
        text: "Submenu data 1 pada main menu",
        priority: "Done",
        badgeClass: "badge-light-success",
        Date: "30 Jan",
        completed: true
    },
    {
        text: "Submenu data 1 pada main menu",
        priority: "In progress",
        badgeClass: "badge-light-primary",
        Date: "06 Nov",
        completed: false
    },
    {
        text: "Submenu data 1 pada main menu",
        priority: "Pending",
        badgeClass: "badge-light-danger",
        Date: "08 Dec",
        completed: false
    },
    {
        text: "Submenu data 1 pada main menu",
        priority: "Done",
        badgeClass: "badge-light-success",
        Date: "15 Mar",
        completed: true
    },
];