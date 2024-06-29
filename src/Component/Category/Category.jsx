import React, { useState } from 'react';
import './Category.css';
import { useSelector, useDispatch } from 'react-redux';
import { getSection } from '../../actions/HelperAction';

export default function Category({ setSelectedSectionId }) {
  const category = useSelector((state) => state.Helper.JobsData.category.data);
  const sections = useSelector((state) => state?.Helper?.JobsData?.section?.data?.[0]?.jops_section);
  const dispatch = useDispatch();
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const handleSubmit = async (categoryId, e) => {
    setSelectedCategoryId(categoryId);
    dispatch(getSection(categoryId));
  };

  return (
    <div className="category-container">
      {category.map((item) => (
        <div
          key={item.id}
          onClick={() => handleSubmit(item.id)}
          className={selectedCategoryId === item.id ? 'selected-category' : ''}
        >
          <h3>{item.category}</h3>
        </div>
      ))}

      {sections && sections.length > 0 && (
        <div>
          <h4 style={{color:"red"}}>Sections:</h4>
          {sections.map((section) => (
            <div key={section.id} onClick={() => setSelectedSectionId(section.id)} style={{cursor:"pointer"}}>
              <h1>{section.section}</h1>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
