// pages/blog/index.tsx
//@ts-nocheck
import { getPages } from "../../utils/notion";
import Link from "next/link";


export default async function Page() {

 const posts = await getPages();
 console.log(posts, "posts")

 function getToday (datestring) {
    const months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
    let date = new Date();
  
    if (datestring) {
      date = new Date(datestring);
    }
  
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    let today = `${month} ${day}, ${year}`;
  
    return today;
  };
 
  return (
    <section className="w-full flex justify-center py-[5rem]">
        <div className="w-[75%] self-center">
        <h1 className="my-6 text-[1.5rem] text-starspurpleDark font-[700] underline underline-offset-4">Featured</h1>
        <ul className="grid grid-cols-4 gap-6 justify-center">
            {posts.map((post) => {
            const slug = post.properties.Slug.rich_text[0]?.plain_text || '';
            const title = post.properties.Title.title[0]?.plain_text || 'No Title';
            const description = post.properties.Description.rich_text[0].plain_text|| 'No Description';
            const date=  getToday(post.properties.Date.last_edited_time) || ''
            const imgSrc = post.properties.BannerImage?.url || 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg';

            return (
                <li key={post.id} className="">
                <Link href={`/blog/${slug}`}>
                    <div className="card w-[100%] bg-base-100 rounded-none">
                    <figure><img src={imgSrc} alt="Blog Image" /></figure>
                    <div className="card-body py-[1rem] px-0">
                        <h3 className="card-title hover:underline text-[1.35rem]">{title}</h3>
                        <p className="text-[0.95rem] text-[#213343] font-[200] leading-[1.75]">{description}</p>
                        <div className="justify-end">
                        <p className='mt-4 text-[#516f90] text-[.875rem] font-[300]'>{date}</p>
                        </div>
                    </div>
                    </div>
                </Link>
                </li>
            );
            })}
        </ul>
        </div>

    </section>
  );
}
