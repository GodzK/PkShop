import React from 'react';
import "./components.css";
import mockData from '../../../BackEnd/Data';

function Content() {
  return (
    <div className='content-container'>
      {mockData.map((item, index) => (
        <div className="content" key={index}>
          <div className="card bg-base-100 w-80 shadow-xl">
            <figure>
              <img
                src={item.imageUrl || "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"}
                alt={item.title || "Image"}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {item.title || "Title"}
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>{item.description || "Description"}</p>
              <div className="card-actions justify-end">
                {item.tags && item.tags.map((tag, tagIndex) => (
                  <div className="badge badge-outline" key={tagIndex}>{tag}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Content;
