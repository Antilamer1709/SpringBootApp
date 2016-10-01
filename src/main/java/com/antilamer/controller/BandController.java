package com.antilamer.controller;

import com.antilamer.beans.BandBean;
import com.antilamer.beans.CommonSearchBean;
import com.antilamer.exeptions.ServerExeption;
import com.antilamer.service.BandBO;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class BandController {

    private static Logger logger = Logger.getLogger(BandController.class);

    @Autowired
    private BandBO bandBO;


    @RequestMapping(value = "/getBand", method = RequestMethod.POST)
    public
    @ResponseBody
    BandBean getBand(@RequestBody CommonSearchBean searchBean) {
        logger.info("getBand()");
        if (searchBean != null && searchBean.getId() != null) {
            return bandBO.getBand(searchBean.getId());
        }
        throw new ServerExeption("Server internal error, please contact to developer");
    }

    @RequestMapping(value = "saveBand", method = RequestMethod.POST)
//    @Secured({"ROLE_ADMIN", "ROLE_SUPER_ADMIN"})
    @ResponseStatus(value = HttpStatus.OK)
    public void saveMetrics(@RequestBody BandBean bean){
        logger.info("*** saveBand()");
        if (bean != null) {
            bandBO.saveBand(bean);
            return;
        }
        throw new ServerExeption("Server internal error, please contact to developer. Band is not saved!");
    }
}