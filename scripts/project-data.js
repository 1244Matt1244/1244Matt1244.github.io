const PROJECT_DATA = {
vehicle_management_app: {
category: 'Backend',
technologies: ['C#', '.NET', 'SQL', 'Docker'],
featured: true
},

rest_api: {
category: 'Backend & APIs',
technologies: ['TypeScript', 'Fastify', 'TypeORM', 'REST API'],
featured: true
},

openstack_terraform_generator: {
category: 'Cloud & Infrastructure',
technologies: ['Python', 'Terraform', 'OpenStack', 'Automation'],
featured: true
},

credit_card_fraud_detection: {
category: 'Python & Data',
technologies: ['Python', 'scikit-learn', 'Machine Learning', 'Data'],
featured: true
},

qgis_project_python: {
category: 'GIS & Data',
technologies: ['Python', 'QGIS', 'GIS'],
featured: true
},

backend_service_assignment: {
category: 'Backend & APIs',
technologies: ['Go', 'Backend', 'API']
},

bank_system_ERP: {
category: 'Backend & Business',
technologies: ['C#', 'SQL', 'ERP']
},

php_app: {
category: 'Web',
technologies: ['PHP', 'MySQL', 'Web']
},

small_guestbook_application: {
category: 'Web',
technologies: ['PHP', 'Web']
},

hello_fastify: {
category: 'Backend & APIs',
technologies: ['JavaScript', 'Node.js', 'Fastify']
},

qrcode_generator: {
category: 'Python & Utilities',
technologies: ['Python', 'QR Code']
},

character_frequency_counter: {
category: 'Python & Algorithms',
technologies: ['Python', 'Algorithms', 'Text Processing']
},

python_geometrical_task: {
category: 'Python & Algorithms',
technologies: ['Python', 'Algorithms', 'Geometry']
},

enhanced_python_code_with_turtle_graphics: {
category: 'Python & Algorithms',
technologies: ['Python', 'Algorithms', 'Graphics']
},

azure_project: {
category: 'Cloud & Infrastructure',
technologies: ['PowerShell', 'Azure', 'DevOps']
},

ha_master_slave_setup_with_redis_db: {
category: 'Cloud & Infrastructure',
technologies: ['Redis', 'Kubernetes', 'Infrastructure']
},

maze_escape: {
category: 'Algorithms & Learning',
technologies: ['Java', 'Algorithms']
},

sql_learning_materials_scripts: {
category: 'SQL & Databases',
technologies: ['SQL', 'Database', 'Learning']
},

password_generator: {
category: 'Web & Utilities',
technologies: ['JavaScript', 'Web', 'Security']
},

quiz_game: {
category: 'Web & Learning',
technologies: ['JavaScript', 'Game']
}
};

function getProjectMetadata(repositoryName) {
return PROJECT_DATA[repositoryName] || {
category: 'Other Projects',
technologies: [],
featured: false
};
}
