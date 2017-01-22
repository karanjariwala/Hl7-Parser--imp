angular.module('confusionApp').factory('team', function() {
    return [{
        name: 'Karan',
        image: 'images/karan.png',
        email: 'karan.jariwala@cerner.com',
        track: ['data', 'clinical', 'Bridge'],
        ManagersEmail: 'sharath.huruli@cerner.com',
        nextWeeksAvail: 20,
        quartersAvail: 300,
        designation: 'System Engineer',
        interfaces: [{
                name: 'AP History Upload',
                description: 'Uploading AP data',
                category: ['data','clinical'],
                status: 'ongoing',
                clients: ['Chsi Scranton', 'Chsi Southside', 'Chsi Oro-valley', 'Chsi Northwest', 'Chsi Gadsden', 'chsi Porter', 'Chsi Vista', 'Chsi Gateway', 'Chsi Pottstown', 'Mission Health MSJH']
            }, {
                name: 'Blood Bank History Upload',
                description: 'Uploading Blood bank data includes uploading Patient data, Products and Transfusions',
                category: ['data','clinical'],
                status: 'ongoing',
                clients: ['Chsi Porter', 'Chsi Trinity'],
            }, {
                name: 'CCD Interfaces',
                description: 'Interface for Creating Continutiy of Care document outbound',
                category: ['clinical'],
                status: 'ongoing',
                clients: ['Dignity Health CCD', 'Huntington CCD HMH_CA', 'United Surgical Partners International USP_TX']
            }, {
                name: 'ADT/ORU interface',
                description: 'Creating Outbound ADT interface',
                category: ['clinical'],
                status: 'ongoing',
                clients: ['Delano Regional Medical Center DRMC_CA']
            },

            {
                name: 'Accounts Payable AP',
                description: 'Accounts Payable Bidirectional',
                category: ['financial'],
                status: 'completed',
                clients: ['San Antonio SACH']
            }
        ]
    }, {
        name: 'Akash',
        image: 'images/akash.png',
        email: 'Akash.Verma@cerner.com',
        track: ['financial'],
        ManagersEmail: 'sharath.huruli@cerner.com',
        nextWeeksAvail: '40',
        quartersAvail: '300',
        designation: 'System Engineer',
       interfaces: [{
                name: 'AP History Upload',
                description: 'Uploading AP data',
                category: ['data','clinical'],
                status: 'ongoing',
                clients: ['Chsi Scranton', 'Chsi Southside', 'Chsi Oro-valley', 'Chsi Northwest', 'Chsi Gadsden', 'chsi Porter', 'Chsi Vista', 'Chsi Gateway', 'Chsi Pottstown', 'Mission Health MSJH']
            }, {
                name: 'Blood Bank History Upload',
                description: 'Uploading Blood bank data includes uploading Patient data, Products and Transfusions',
                category: ['data','clinical'],
                status: 'ongoing',
                clients: ['Chsi Porter', 'Chsi Trinity'],
            }, {
                name: 'CCD Interfaces',
                description: 'Interface for Creating Continutiy of Care document outbound',
                category: ['clinical'],
                status: 'ongoing',
                clients: ['Dignity Health CCD', 'Huntington CCD HMH_CA', 'United Surgical Partners International USP_TX']
            }, {
                name: 'ADT/ORU interface',
                description: 'Creating Outbound ADT interface',
                category: ['clinical'],
                status: 'ongoing',
                clients: ['Delano Regional Medical Center DRMC_CA']
            },

            {
                name: 'Accounts Payable AP',
                description: 'Accounts Payable Bidirectional',
                category: ['financial'],
                status: 'completed',
                clients: ['San Antonio SACH']
            }
        ]
    }, {
        name: 'Neha',
        image: 'images/neha1.png',
        email: 'Neha.Singh@cerner.com',
        track: ['financial'],
        ManagersEmail: 'sharath.huruli@cerner.com',
        nextWeeksAvail: '40',
        quartersAvail: '300',
        designation: 'System Engineer',
       interfaces: [{
                name: 'AP History Upload',
                description: 'Uploading AP data',
                category: ['data','clinical'],
                status: 'ongoing',
                clients: ['Chsi Scranton', 'Chsi Southside', 'Chsi Oro-valley', 'Chsi Northwest', 'Chsi Gadsden', 'chsi Porter', 'Chsi Vista', 'Chsi Gateway', 'Chsi Pottstown', 'Mission Health MSJH']
            }, {
                name: 'Blood Bank History Upload',
                description: 'Uploading Blood bank data includes uploading Patient data, Products and Transfusions',
                category: ['data','clinical'],
                status: 'ongoing',
                clients: ['Chsi Porter', 'Chsi Trinity']
            }, {
                name: 'CCD Interfaces',
                description: 'Interface for Creating Continutiy of Care document outbound',
                category: ['clinical'],
                status: 'ongoing',
                clients: ['Dignity Health CCD', 'Huntington CCD HMH_CA', 'United Surgical Partners International USP_TX']
            }, {
                name: 'ADT/ORU interface',
                description: 'Creating Outbound ADT interface',
                category: ['clinical'],
                status: 'ongoing',
                clients: ['Delano Regional Medical Center DRMC_CA']
            },

            {
                name: 'Accounts Payable AP',
                description: 'Accounts Payable Bidirectional',
                category: ['financial'],
                status: 'completed',
                clients: ['San Antonio SACH']
            }
        ]
    }, {
        name: 'Archit',
        image: 'images/archit.png',
        email: 'Archit.Gupta@cerner.com',
        track: ['data', 'clinical','financial'],
        ManagersEmail: 'sharath.huruli@cerner.com',
        nextWeeksAvail: '40',
        quartersAvail: '300',
        designation: 'System Engineer',
       interfaces: [{
                name: 'AP History Upload',
                description: 'Uploading AP data',
                category: ['data','clinical'],
                status: 'ongoing',
                clients: ['Chsi Scranton', 'Chsi Southside', 'Chsi Oro-valley', 'Chsi Northwest', 'Chsi Gadsden', 'chsi Porter', 'Chsi Vista', 'Chsi Gateway', 'Chsi Pottstown', 'Mission Health MSJH']
            }, {
                name: 'Blood Bank History Upload',
                description: 'Uploading Blood bank data includes uploading Patient data, Products and Transfusions',
                category: ['data','clinical'],
                status: 'ongoing',
                clients: ['Chsi Porter', 'Chsi Trinity'],
            }, {
                name: 'CCD Interfaces',
                description: 'Interface for Creating Continutiy of Care document outbound',
                category: ['clinical'],
                status: 'ongoing',
                clients: ['Dignity Health CCD', 'Huntington CCD HMH_CA', 'United Surgical Partners International USP_TX']
            }, {
                name: 'ADT/ORU interface',
                description: 'Creating Outbound ADT interface',
                category: ['clinical'],
                status: 'ongoing',
                clients: ['Delano Regional Medical Center DRMC_CA']
            },

            {
                name: 'Accounts Payable AP',
                description: 'Accounts Payable Bidirectional',
                category: ['financial'],
                status: 'completed',
                clients: ['San Antonio SACH']
            }
        ]
    }, {
        name: 'Rahul',
        image: 'images/rahul.png',
        email: 'Rahul.Sawhney@cerner.com',
        track: ['clinical', 'bridge','financial'],
        ManagersEmail: 'sharath.huruli@cerner.com',
        nextWeeksAvail: '40',
        quartersAvail: '300',
        designation: 'System Engineer',
      interfaces: [{
                name: 'AP History Upload',
                description: 'Uploading AP data',
                category: ['data','clinical'],
                status: 'ongoing',
                clients: ['Chsi Scranton', 'Chsi Southside', 'Chsi Oro-valley', 'Chsi Northwest', 'Chsi Gadsden', 'chsi Porter', 'Chsi Vista', 'Chsi Gateway', 'Chsi Pottstown', 'Mission Health MSJH']
            }, {
                name: 'Blood Bank History Upload',
                description: 'Uploading Blood bank data includes uploading Patient data, Products and Transfusions',
                category: ['data','clinical'],
                status: 'ongoing',
                clients: ['Chsi Porter', 'Chsi Trinity'],
            }, {
                name: 'CCD Interfaces',
                description: 'Interface for Creating Continutiy of Care document outbound',
                category: ['clinical'],
                status: 'ongoing',
                clients: ['Dignity Health CCD', 'Huntington CCD HMH_CA', 'United Surgical Partners International USP_TX']
            }, {
                name: 'ADT/ORU interface',
                description: 'Creating Outbound ADT interface',
                category: ['clinical'],
                status: 'ongoing',
                clients: ['Delano Regional Medical Center DRMC_CA']
            },

            {
                name: 'Accounts Payable AP',
                description: 'Accounts Payable Bidirectional',
                category: ['financial'],
                status: 'completed',
                clients: ['San Antonio SACH']
            }
        ]
    }, {
        name: 'Sharath',
        image: 'images/sharath.png',
        email: 'Sharath.Huruli@cerner.com',
        track: ['data', 'clinical'],
        ManagersEmail: 'sharath.huruli@cerner.com',
        nextWeeksAvail: '40',
        quartersAvail: '300',
        designation: 'Team Lead',
        interfaces: [{
                name: 'AP History Upload',
                description: 'Uploading AP data',
                category: ['data','clinical'],
                status: 'ongoing',
                clients: ['Chsi Scranton', 'Chsi Southside', 'Chsi Oro-valley', 'Chsi Northwest', 'Chsi Gadsden', 'chsi Porter', 'Chsi Vista', 'Chsi Gateway', 'Chsi Pottstown', 'Mission Health MSJH']
            }, {
                name: 'Blood Bank History Upload',
                description: 'Uploading Blood bank data includes uploading Patient data, Products and Transfusions',
                category: ['data','clinical'],
                status: 'ongoing',
                clients: ['Chsi Porter', 'Chsi Trinity']
            }, {
                name: 'CCD Interfaces',
                description: 'Interface for Creating Continutiy of Care document outbound',
                category: ['clinical'],
                status: 'ongoing',
                clients: ['Dignity Health CCD', 'Huntington CCD HMH_CA', 'United Surgical Partners International USP_TX']
            }, {
                name: 'ADT/ORU interface',
                description: 'Creating Outbound ADT interface',
                category: ['clinical'],
                status: 'ongoing',
                clients: ['Delano Regional Medical Center DRMC_CA']
            },

            {
                name: 'Accounts Payable AP',
                description: 'Accounts Payable Bidirectional',
                category: ['financial'],
                status: 'completed',
                clients: ['San Antonio SACH']
            }
        ]
    }, {
        name: 'Niru',
        image: 'images/niru.png',
        email: 'Niru.Kumari@cerner.com',
        track: ['financial'],
        ManagersEmail: 'sharath.huruli@cerner.com',
        nextWeeksAvail: '40',
        quartersAvail: '300',
        designation: 'System Engineer',
       interfaces: [{
                name: 'AP History Upload',
                description: 'Uploading AP data',
                category: ['data','clinical'],
                status: 'ongoing',
                clients: ['Chsi Scranton', 'Chsi Southside', 'Chsi Oro-valley', 'Chsi Northwest', 'Chsi Gadsden', 'chsi Porter', 'Chsi Vista', 'Chsi Gateway', 'Chsi Pottstown', 'Mission Health MSJH']
            }, {
                name: 'Blood Bank History Upload',
                description: 'Uploading Blood bank data includes uploading Patient data, Products and Transfusions',
                category: ['data','clinical'],
                status: 'ongoing',
                clients: ['Chsi Porter', 'Chsi Trinity']
            }, {
                name: 'CCD Interfaces',
                description: 'Interface for Creating Continutiy of Care document outbound',
                category: ['clinical'],
                status: 'ongoing',
                clients: ['Dignity Health CCD', 'Huntington CCD HMH_CA', 'United Surgical Partners International USP_TX']
            }, {
                name: 'ADT/ORU interface',
                description: 'Creating Outbound ADT interface',
                category: ['clinical'],
                status: 'ongoing',
                clients: ['Delano Regional Medical Center DRMC_CA']
            },

            {
                name: 'Accounts Payable AP',
                description: 'Accounts Payable Bidirectional',
                category: ['financial'],
                status: 'completed',
                clients: ['San Antonio SACH']
            }
        ]
    }];
});
