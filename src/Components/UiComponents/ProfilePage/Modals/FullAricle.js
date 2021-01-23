import React from 'react';
import { FieldTimeOutlined } from '@ant-design/icons';

function FullAricle(props) {
  return (
    <div className='modal-container blog-container'>
      <div className='full-article-modal'>
        <div className='blog-card'>
          <div className='card-top'>
            <span className='about'>About</span>
            <span className='date'>27th MAR</span>
          </div>
          <div className='card-content'>
            <h5>City Lights in New York</h5>
            <p className='sub-heading'>The city that never sleeps</p>
            <p className='content'>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32. The
              standard chunk of Lorem Ipsum used since the 1500s is reproduced
              below for those interested. Sections 1.10.32 and 1.10.33 from "de
              Finibus Bonorum et Malorum" by Cicero are also reproduced in their
              exact original form, accompanied by English versions from the 1914
              translation by H. Rackham..from sections 1.10.32 and 1.10.33 of
              "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
              Cicero, written in 45 BC. This book is a treatise on the theory of
              ethics, very popular during the Renaissance. The first line of
              Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
              section 1.10.32. The standard chunk of Lorem Ipsum used since the
              1500s is reproduced below for those interested. Sections 1.10.32
              and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
              also reproduced in their exact original form, accompanied by
              English versions from the 1914 translation by H. Rackham..from
              sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
              (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
              book is a treatise on the theory of ethics, very popular during
              the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor
              sit amet..", comes from a line in section 1.10.32. The standard
              chunk of Lorem Ipsum used since the 1500s is reproduced below for
              those interested. Sections 1.10.32 and 1.10.33 from "de Finibus
              Bonorum et Malorum" by Cicero are also reproduced in their exact
              original form, accompanied by English versions from the 1914
              translation by H. Rackham..
            </p>
            <div className='card-bottom'>
              <span>
                <FieldTimeOutlined className='icon' />6 mins ago
              </span>
              <button onClick={props.close}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullAricle;
