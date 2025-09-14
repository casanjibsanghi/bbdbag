import React from 'react';

interface PersonCardProps {
  name: string;
  role: string;
  photo?: string;
  className?: string;
}

const PersonCard: React.FC<PersonCardProps> = ({ 
  name, 
  role, 
  photo, 
  className = '' 
}) => {
  const initials = name
    .split(' ')
    .map(word => word.charAt(0))
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <div 
      className={`group bg-white rounded-xl card-shadow hover-lift transition-smooth p-6 text-center ${className}`}
      tabIndex={0}
      role="button"
      aria-label={`${name}, ${role}`}
    >
      {/* Photo or Avatar */}
      <div className="relative w-24 h-24 mx-auto mb-4">
        {photo ? (
          <img
            src={photo}
            alt={`Portrait of ${name}`}
            className="w-full h-full rounded-full object-cover ring-4 ring-primary/10 group-hover:ring-primary/20 transition-all duration-300"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center ring-4 ring-primary/10 group-hover:ring-primary/20 transition-all duration-300">
            <span className="text-xl font-bold text-primary">
              {initials}
            </span>
          </div>
        )}
      </div>

      {/* Name and Role */}
      <div className="space-y-1">
        <h3 className="font-semibold text-secondary text-lg leading-tight">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground font-medium">
          {role}
        </p>
      </div>
    </div>
  );
};

export default PersonCard;