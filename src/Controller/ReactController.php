<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class ReactController extends AbstractController
{
    /**
     * @Route("", name="react")
     */
    public function index()
    {
        return $this->render('react/index.html.twig', [
            'controller_name' => 'ReactController',
        ]);
    }

    /**
     * @Route("/new", name="rep_log_new")
     */
    public function test1()
    {
        return $this->render('react/index.html.twig', [
            'controller_name' => 'ReactController',
        ]);
    }

    /**
     * @Route("/items", name="test-2")
     */
    public function test2()
    {
       return $this->json([
        ['id'=>1, 'reps'=> 25, 'itemLabel'=> 'Mourad', 'totalWeightLifted'=> 112.5],
        ['id'=>2, 'reps'=> 25, 'itemLabel'=> 'Chabour', 'totalWeightLifted'=> 112.5],
        ['id'=>3, 'reps'=> 25, 'itemLabel'=> 'YAsmina', 'totalWeightLifted'=> 112.5]

    ]);
    }
}
