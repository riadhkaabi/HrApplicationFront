export class AppSettings {
    public static IP_ADDRESS =  '192.168.1.17'
    public static details = JSON.parse(localStorage.getItem('user')) ;
    public static USER_URL = 'https://'+AppSettings.IP_ADDRESS+':8080/user' ;
    public static NOTIFCATION_URL = 'https://'+AppSettings.IP_ADDRESS+':8080/notif' ;
    public static LEAVE_URL = 'https://'+AppSettings.IP_ADDRESS+':8080/holiday' ;
    public static MATCHING_URL = 'https://'+AppSettings.IP_ADDRESS+':8080/matching' ;
    public static EMPLOYEE_URL = 'https://'+AppSettings.IP_ADDRESS+':8080/employee' ;
    public static EMPLOYEE_Device_URL = 'https://'+AppSettings.IP_ADDRESS+':8080/device' ;
    public static ATTENDANCE_URL = 'https://'+AppSettings.IP_ADDRESS+':8080/attendance' ;
    public static STAT_URL = 'https://'+AppSettings.IP_ADDRESS+':8080/stat' ;
    public static URL_UPLOAD_PICTURE = 'https://'+AppSettings.IP_ADDRESS+':80/upload.php' ;



}
