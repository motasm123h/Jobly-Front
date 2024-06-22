import React from 'react'
import './Category'
import { useSelector, useDispatch } from 'react-redux';
import { getSection } from '../../actions/HelperAction';
export default function Category({ setSelectedSectionId }) {
    const category = useSelector((state) => state.Helper.JobsData.category.data);
    const sections = useSelector((state) => state?.Helper?.JobsData?.section?.data?.[0]?.jops_section);
    const dispatch = useDispatch();
    // console.log(sections);
    const handleSubmit = async (categoryId, e) => {
        // e.preventDefault();
        dispatch(getSection(categoryId));
    };
    return (
        <div>
            {category.map((item) => (
                <div key={item.id} onClick={() => handleSubmit(item.id)}>
                    <h3>{item.category}</h3>
                </div>
            ))}

            {sections && sections.length > 0 && (
                <div>
                    <h4>Sections:</h4>
                    {sections.map((section) => (
                        <div key={section.id} onClick={() => setSelectedSectionId(section.id)}>
                            <h1>{section.section}</h1>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
