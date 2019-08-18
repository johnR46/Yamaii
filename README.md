# YaMaii
โค้ดตอนทำโปรเจ็ค  Software Engineering

#ส่วนอื่นๆ 
* Java EE กับ Spring framework คืออะไร?
    * Java EE หรือ Java Enterprise Edition หรือ J2EE เนี่ย(จริงๆตอนนี้เปลี่ยนเป็น Jakarta EE แล้วนะ) มันก็คือ Java ธรรมดาที่ยกระดับขึ้นไปอีกนิ้ดนึงโดยจะมีการเพิ่ม Library หรือ Runtime Environment ที่ใช้สำหรับทำ web application หรือ application ที่มีขนาดใหญ่นั่นเอง
    * Spring framework สั้นๆ คือ framework ที่มาช่วยในการอำนวยความสะดวกในการสร้าง web application
    * Spring boot ก็สั้นๆอีก คือเปรียบเสมือนอุปกรณ์ที่ช่วยให้เราสามารถ “เริ่ม” ทำ web application ด้วย spring framework ได้เร็วขึ้น (ช่วย setup config ต่างๆ)
    * JPA ย่อมาจาก Java Persistence API
เป็น Java API ตัวหนึ่งที่ทำหน้าที่ Map ข้อมูลจาก Database ให้อยู่ในรูปของ Object ในภาษา Java





#อธิบายสัญลักษณ์พวกตัว @ ทั้งหลายแหล่ เรียงตาม Entity,Repository,Controller,Test
    
    *   Entity
        *  @Entity 
            * เพื่อให้ spring รู้ว่านี่ Entity นะเออ !
        * @Id 
            * Id นี่แหล่ะจะเป็นส่วนที่บอกว่า field ไหนเป็น Primary Key ของเรา
        * @GeneratedValue
            * ก็เป็นเหมือนการบอก spring ว่า ในdatabase อ่ะ column เนี้ย ขอเป็น auto-increment
        * @NotNull
            * ห้ามเป็น null
        * @Pattern(regexp = "[A-Za-z]{3,25}")
            * ตั้ง pattern ที่ต้องการได้
        * @Size(min = 3, max = 25)
            * length ของ String 
        * @Column(unique = true)
            * คอลัมน์นั้นๆ ห้ามซ้ำกัน
        * @Max(100000)
            * ตั้งลิมิตของตัวเลขมากสุด
        * @Min(1) 
            * ตั้งลิมิตของตัวเลขน้อยสุด
        * Relationship
            * @OneToOne
            * @OneToMany
            * @ManyToOne
            * @ManyToMany
        * @ManyToOne(fetch = FetchType.LAZY)
            * ถ้ายังไม่ใช้ก็ไม่ต้องไป load มาสิ ค่อยไป load เมื่อต้องการใช้งาน (Lazy loading)

        * @ManyToOne(fetch = FetchType.EAGER)
            * โหลดหมดทีเดียว 
    
        


   
            
    *   Repository
        * ***ตัว Repository เนี่ย เราแทบจะไม่ต้อง Implement เองเลย เราแค่ทำการ extends JpaRepository ซึ่งหลังจากที่เราเพิ่ม spring-boot-starter-data-jpa เข้าไปก็จะมีตัวนี้ให้ใช้โดยอัตโนมัติเลย
        * ***เราจะสร้าง Repository เป็นแค่ Interface ก็พอเนื่องจากว่าเนื้อโค้ดที่จะใช้ในการทำ action กับ database เนี่ยมันถูก implement ไว้ให้ใน JpaRepository อยู่แล้ว
        * สำคัญ
            * extends JpaRepository<Class, Long>
                * Class นั้นหมายถึง Entity ของเรา เราใช้ Entity ชื่ออะไรก็ใส่เป็นชื่อนั้นแหล่ะครับ
                * Long คือ Data type ของ Primary Key ของตัวแปร Entity นั้นๆ ซึ่งของเราเป็น Long นั่นเองครับ


    *   Controller
        * @RestController 
            * annotation นี้จะทำให้ class นี้กลายเป็น RestController
            *  เพื่อ map URL กับ method ของเรา
        * @CrossOrigin
            * enable CROS http ?
        * 

