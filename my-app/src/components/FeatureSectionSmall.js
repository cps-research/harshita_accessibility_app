const FeatureSectionSmall = ({ readElement }) => {
  return (
    <div className="feature-section container my-4">
      <div className="d-flex flex-column ">
        
        <div className="p-2 flex-fill">
          <div 
            className="card bg-info text-dark"
            style={{backgroundColor: "#68d628"}}
            role="button"
            aria-label="What’s New section"
            tabIndex="0"
            onMouseEnter={() => readElement("What’s New")}
            onFocus={() => readElement("What’s New")}
          >
            <p className="m-auto py-2">What’s New</p>
          </div>
        </div>
        
        <div className="p-2 flex-fill">
          <div 
            className="card bg-warning text-dark"
            style={{backgroundColor: "#68d628"}}
            role="button"
            aria-label="Know Your Minister section"
            tabIndex="0"
            onMouseEnter={() => readElement("Know Your Minister")}
            onFocus={() => readElement("Know Your Minister")}
          >
            <p className="m-auto py-2">Know Your Minister</p>
          </div>
        </div>
        
        <div className="p-2 flex-fill">
          <div
            className="card bg-primary text-dark" 
            style={{backgroundColor: "#68d628"}}
            role="button"
            aria-label="Performance Smartboard section"
            tabIndex="0"
            onMouseEnter={() => readElement("Performance Smartboard")}
            onFocus={() => readElement("Performance Smartboard")}
          >
            <p className="m-auto py-2">Performance Smartboard</p>
          </div>
        </div>
        
        <div className="p-2 flex-fill">
          <div 
            className="card text-dark" 
            style={{backgroundColor: "#68d628"}}
            role="button"
            aria-label="Public Opinion and Public Grievances section"
            tabIndex="0"
            onMouseEnter={() => readElement("Public Opinion and Public Grievances")}
            onFocus={() => readElement("Public Opinion and Public Grievances")}
          >
            <p className="m-auto py-2">Public Opinion and Public Grievances</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default FeatureSectionSmall;
