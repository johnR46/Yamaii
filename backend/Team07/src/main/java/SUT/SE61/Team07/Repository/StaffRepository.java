package SUT.SE61.Team07.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import SUT.SE61.Team07.Entity.*;

@RepositoryRestResource
public interface StaffRepository extends JpaRepository<Staff, Long> {
    Staff findByStaffId(Long staffId);

    Staff findByStaffUser(String staffUser);

    Staff findByStaffPass(String staffPass);
    Staff findByOnline(String online);
    
}



