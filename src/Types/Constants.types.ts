export interface Post{
    title:string,
    category: string,
    content: string
};

export interface Page{
    title: string, 
    icon: string, 
    url: string,
    notifications: number,
    content: Array<object>
}