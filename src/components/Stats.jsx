const stats = [
  { icon: 'fa-solid fa-calendar-check', value: '10+', label: 'Years of Experience' },
  { icon: 'fa-solid fa-globe', value: '120+', label: 'Countries Served' },
  { icon: 'fa-solid fa-users', value: '500+', label: 'Happy Clients' },
  { icon: 'fa-solid fa-box-open', value: '1000+', label: 'Products Delivered' },
];

function Stats() {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats-wrapper">
          {stats.map((stat, index) => (
            <div key={index} style={{ display: 'contents' }}>
              <div className="stat-item">
                <div className="stat-icon"><i className={stat.icon}></i></div>
                <div className="stat-text">
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                </div>
              </div>
              {index < stats.length - 1 && <div className="stat-divider"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
