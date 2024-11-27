import React from "react";

const PermissionsEditor = ({ permissions, onChange }) => {
    const allPermissions = ["Read", "Write", "Delete"];
  
    return (
      <div className="flex flex-col space-y-2">
        {allPermissions.map((perm) => (
          <label key={perm}>
            <input
              type="checkbox"
              checked={permissions.includes(perm)}
              onChange={(e) =>
                onChange(
                  e.target.checked
                    ? [...permissions, perm]
                    : permissions.filter((p) => p !== perm)
                )
              }
            />
            {perm}
          </label>
        ))}
      </div>
    );
  };
  export default PermissionsEditor;
  