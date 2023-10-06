import React from 'react'
import "./Startups.css"
function BlogCard(props) {
  return (
    <>
     <div className="blogcard-cont">
     <center>
        <div className="blogcard-left">
                <img src={props.img} alt="sapna kumari img" />
            <h3>{props.name}
            </h3>
        </div>
        </center>
        <div className="blogcard-right">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem possimus impedit dolor debitis cumque enim earum, sit deserunt vero delectus, error explicabo ut obcaecati fugiat molestiae amet ipsam! Ipsa, quis alias. Voluptates veniam rem dolore asperiores eos expedita sint, dolorem numquam natus eaque ex incidunt eligendi inventore doloribus laboriosam fuga itaque soluta, nobis maxime repudiandae quidem! Delectus consequuntur in error modi optio quis! Praesentium minima excepturi explicabo, totam optio debitis corporis alias eos temporibus quia sed enim et quidem a reiciendis sit aperiam aliquam porro architecto, beatae adipisci fuga delectus sapiente similique? Error blanditiis atque ducimus doloremque at a culpa voluptas impedit vel corporis quasi, quos facere minus dignissimos reiciendis, quaerat veniam? Alias optio natus asperiores tenetur modi incidunt? Ab facilis quos fuga at dolores dignissimos reprehenderit nobis eveniet voluptatem assumenda inventore ex adipisci omnis perspiciatis ipsa tenetur dolore placeat unde ipsam, velit iusto, veritatis porro? Iure, enim velit. Consequatur, ipsam iste error minus numquam commodi dolor. Omnis temporibus fugit ipsa totam optio assumenda quis. Cupiditate quibusdam officia provident eum eos fugiat a consequuntur, sed hic quas fuga nam debitis vel ut dolorem soluta laudantium! Molestiae asperiores laudantium ab dolorem molestias. Perferendis voluptate architecto necessitatibus explicabo incidunt non maiores enim!
        </div>
     </div> 
    </>
  )
}

export default BlogCard
