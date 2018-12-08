import * as React from 'react';
import {IBlogContent} from "../../../model/interface/IBlogContent";

export default ({
                    category_name,
                    content,
                    member_id,
                    regi_date,
                    title
                }: IBlogContent) => {
    return (
        <section >
            <header>
                <h2>{title}</h2>
                <span>{regi_date}</span>
                <span>{category_name}</span>
                <span>{member_id}</span>
            </header>
            <article  dangerouslySetInnerHTML={{__html: content}}/>

        </section>
    );
};
