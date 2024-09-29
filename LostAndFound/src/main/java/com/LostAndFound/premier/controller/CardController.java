package com.LostAndFound.premier.controller;

import org.springframework.web.bind.annotation.RestController;

import com.LostAndFound.premier.bean.entity.Card;
import com.LostAndFound.premier.service.CardService;

import jakarta.annotation.Resource;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;




@RestController
public class CardController {

  @Autowired
  public CardService cardService;

  @GetMapping("info/{id}")
  public List<Card> getInfo(@PathVariable String id) {

    return this.cardService.getCardInfo(id);
  }

  // @GetMapping("TEST")
  // public List<Card> getMethodName(@RequestParam String param) {
  //     return this.cardService.;
  // }
  
  @PostMapping("add")
  public Integer addNewCard(@RequestBody String entity) {
      
      
      return 1;
  }

  @DeleteMapping("delete/{id}")
  public Integer postMethodName(@RequestBody String entity) {
    //TODO: process POST request
    
    return 1;
}
  @PutMapping("path/{id}")
  public Card putMethodName(@PathVariable String id, @RequestBody String entity) {
      //TODO: process PUT request
      
      return new Card();
  }
  
  
}
